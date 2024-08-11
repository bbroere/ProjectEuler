import {input} from "../inputs/p83";
import {numbersWithMaxSize} from "../utilities/sequences";

/**
 * <p class="small_notice">NOTE: This problem is a significantly more challenging version of <a href="problem=81">Problem 81</a>.</p>
 * <p>In the $5$ by $5$ matrix below, the minimal path sum from the top left to the bottom right, by moving left, right, up, and down, is indicated in bold red and is equal to $2297$.</p>
 * <div class="center">
 * $$
 * \begin{pmatrix}
 * \color{red}{131} &amp; 673 &amp; \color{red}{234} &amp; \color{red}{103} &amp; \color{red}{18}\\
 * \color{red}{201} &amp; \color{red}{96} &amp; \color{red}{342} &amp; 965 &amp; \color{red}{150}\\
 * 630 &amp; 803 &amp; 746 &amp; \color{red}{422} &amp; \color{red}{111}\\
 * 537 &amp; 699 &amp; 497 &amp; \color{red}{121} &amp; 956\\
 * 805 &amp; 732 &amp; 524 &amp; \color{red}{37} &amp; \color{red}{331}
 * \end{pmatrix}
 * $$
 * </div>
 * <p>Find the minimal path sum from the top left to the bottom right by moving left, right, up, and down in <a href="https://projecteuler.net/resources/documents/0083_matrix.txt">matrix.txt</a> (right click and "Save Link/Target As..."), a 31K text file containing an $80$ by $80$ matrix.</p>
 *
 * <p>Generated on 2024-08-11 from <a href='https://projecteuler.net/problem=83'>source</a></p>
 * <p><i><b>Average runtime ~??? ms</b></i></p>
 */
export function run(): number {
    // For this problem we will use Dijkstra's algorithm to find the shortest path from the top left to the bottom right
    const grid: number[][] = input;
    const nofRows: number = grid.length;
    const nofCols: number = grid[0].length;
    const distances: number[][] = numbersWithMaxSize(nofRows).map(_ => numbersWithMaxSize(nofCols).map(_ => Infinity));
    const queue: [number, number, number][] = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function addToQueue(row: number, col: number, prio: number): void {
        queue.push([row, col, prio]);
        queue.sort((a, b) => a[2] - b[2]);
    }
    // Add top left to the queue
    distances[0][0] = grid[0][0];
    addToQueue(0, 0, grid[0][0]);

    while (queue.length != 0) {
        // Get first element from the queue (priority does not matter)
        const [row, col, _] = queue.shift();
        const currentDistance = distances[row][col];
        // Loop over directions
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            // Check if it is inside the grid
            if (newRow >= 0 && newRow < nofRows && newCol >= 0 && newCol < nofCols) {
                // Calculate the new distance in that direction and if it is smaller, store it
                const newDistance = currentDistance + grid[newRow][newCol];
                if (newDistance < distances[newRow][newCol]) {
                    distances[newRow][newCol] = newDistance;
                    // Also add this to the queue
                    addToQueue(newRow, newCol, newDistance);
                }
            }
        }
    }

    return distances[nofRows - 1][nofCols - 1];
}
