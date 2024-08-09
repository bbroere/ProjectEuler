import {input} from "../inputs/p82";

/**
 * <p class="small_notice">NOTE: This problem is a more challenging version of <a href="problem=81">Problem 81</a>.</p>
 * <p>The minimal path sum in the $5$ by $5$ matrix below, by starting in any cell in the left column and finishing in any cell in the right column, and only moving up, down, and right, is indicated in red and bold; the sum is equal to $994$.</p>
 * <div class="center">
 * $$
 * \begin{pmatrix}
 * 131 &amp; 673 &amp; \color{red}{234} &amp; \color{red}{103} &amp; \color{red}{18}\\
 * \color{red}{201} &amp; \color{red}{96} &amp; \color{red}{342} &amp; 965 &amp; 150\\
 * 630 &amp; 803 &amp; 746 &amp; 422 &amp; 111\\
 * 537 &amp; 699 &amp; 497 &amp; 121 &amp; 956\\
 * 805 &amp; 732 &amp; 524 &amp; 37 &amp; 331
 * \end{pmatrix}
 * $$
 * </div>
 * <p>Find the minimal path sum from the left column to the right column in <a href="https://projecteuler.net/resources/documents/0082_matrix.txt">matrix.txt</a> (right click and "Save Link/Target As..."), a 31K text file containing an $80$ by $80$ matrix.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=82'>source</a></p>
 * <p><i><b>Average runtime ~0.45 ms</b></i></p>
 */
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
