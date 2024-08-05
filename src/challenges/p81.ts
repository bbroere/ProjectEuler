import {input} from "../inputs/p81";

// Average runtime ~0.03 ms
export function run(): number {
    const runningResult: number[][] = input;
    input.forEach((row: number[], rowIndex: number) => {
        row.forEach((_: number, columnIndex: number) => {
            if (rowIndex === 0 && columnIndex === 0)
                return;
            if (rowIndex === 0) {
                runningResult[0][columnIndex] += runningResult[0][columnIndex - 1];
            } else if (columnIndex === 0) {
                runningResult[rowIndex][0] += runningResult[rowIndex - 1][0];
            } else {
                runningResult[rowIndex][columnIndex] += Math.min(runningResult[rowIndex - 1][columnIndex], runningResult[rowIndex][columnIndex - 1]);
            }
        });
    });
    return runningResult.slice(-1)[0].slice(-1)[0];
}
