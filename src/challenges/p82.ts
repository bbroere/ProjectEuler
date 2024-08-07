import {input} from "../inputs/p81"; // Same input

// Average runtime ~0.45 ms
export function run(): number {
    const runningResult: number[][] = input;

    // The first column is trivial, just do nothing!
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
    return runningResult.map((row: number[]) => row.slice(-1)[0]).reduce((a: number, b: number) => Math.min(a, b));
}
