import {input} from "../inputs/p11";

// Average runtime ~0.03 ms
export function run(): number {
    // Split into grid
    const grid: number[][] = input.split("\n").map((t: string) => t.split(" ").map(Number));
    let maxProduct: number = 0;
    // Be smart, loop over all and do / | \ and - for each number if it can be done
    const width: number = grid[0].length;
    const height: number = grid.length;
    for (let y: number = 0; y < grid.length; y++) {
        for (let x: number = 0; x < width; x++) {
            const xCheck: boolean = x < width - 4;
            const yCheck: boolean = y < height - 4;
            if (xCheck) {
                const horizontal: number = grid[y][x] * grid[y][x + 1] * grid[y][x + 2] * grid[y][x + 3];
                if (horizontal > maxProduct) {
                    maxProduct = horizontal;
                }
            }
            if (yCheck) {
                const vertical: number = grid[y][x] * grid[y + 1][x] * grid[y + 2][x] * grid[y + 3][x];
                if (vertical > maxProduct) {
                    maxProduct = vertical;
                }
            }
            if (xCheck && yCheck) {
                const rightDown: number = grid[y][x] * grid[y + 1][x + 1] * grid[y + 2][x + 2] * grid[y + 3][x + 3];
                if (rightDown > maxProduct) {
                    maxProduct = rightDown;
                }
            }
            if (x > 2 && yCheck) {
                const leftDown: number = grid[y][x] * grid[y + 1][x - 1] * grid[y + 2][x - 2] * grid[y + 3][x - 3];
                if (leftDown > maxProduct) {
                    maxProduct = leftDown;
                }
            }
        }
    }
    return maxProduct;
}
