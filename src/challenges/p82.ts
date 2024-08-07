import {testInput} from "../inputs/p81"; // Same input

// Average runtime ~??? ms
export function run(): number {
    const runningResult: number[][] = testInput;

    // The first column is trivial, just sum the first column from the first upto the current row
    for (let rowIndex: number = 1; rowIndex < runningResult.length; rowIndex++)
        runningResult[rowIndex][0] += runningResult[rowIndex - 1][0];

    for (let columnIndex: number = 1; columnIndex < runningResult[0].length; columnIndex++) {
        for (let rowIndex: number = 0; rowIndex < runningResult.length; rowIndex++) {
            // Start of with the current minimum being the sum of the current cell and the cell to the left
            let currentMin: number = runningResult[rowIndex][columnIndex - 1] + runningResult[rowIndex][columnIndex];
            if (rowIndex > 0)
                currentMin = Math.min(currentMin, runningResult[rowIndex - 1][columnIndex] + runningResult[rowIndex][columnIndex]);
            if (rowIndex < runningResult.length - 1) {
                let sumBelowCurrent: number = 0;
                for (let nextRowIndex: number = rowIndex + 1; nextRowIndex < runningResult.length; nextRowIndex++) {
                    sumBelowCurrent += runningResult[nextRowIndex][columnIndex];
                    currentMin = Math.min(currentMin, runningResult[nextRowIndex][columnIndex - 1] + sumBelowCurrent + runningResult[rowIndex][columnIndex]);
                }
            }
            runningResult[rowIndex][columnIndex] = currentMin;
        }
    }
    console.log(runningResult);

    return runningResult[0].slice(-1)[0];
}
