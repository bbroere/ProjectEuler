import {input} from "../inputs/p81";

/**
 * <p>In the $5$ by $5$ matrix below, the minimal path sum from the top left to the bottom right, by <b>only moving to the right and down</b>, is indicated in bold red and is equal to $2427$.</p>
 * <div class="center">
 * $$
 * \begin{pmatrix}
 * \color{red}{131} &amp; 673 &amp; 234 &amp; 103 &amp; 18\\
 * \color{red}{201} &amp; \color{red}{96} &amp; \color{red}{342} &amp; 965 &amp; 150\\
 * 630 &amp; 803 &amp; \color{red}{746} &amp; \color{red}{422} &amp; 111\\
 * 537 &amp; 699 &amp; 497 &amp; \color{red}{121} &amp; 956\\
 * 805 &amp; 732 &amp; 524 &amp; \color{red}{37} &amp; \color{red}{331}
 * \end{pmatrix}
 * $$
 * </div>
 * <p>Find the minimal path sum from the top left to the bottom right by only moving right and down in <a href="https://projecteuler.net/resources/documents/0081_matrix.txt">matrix.txt</a> (right click and "Save Link/Target As..."), a 31K text file containing an $80$ by $80$ matrix.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=81'>source</a></p>
 * <p><i><b>Average runtime ~0.03 ms</b></i></p>
 */
export function run(): number {
    const runningResult: number[][] = [...input];
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
