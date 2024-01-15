import {input} from "../inputs/p11";

export function run(): number {
    // Split into grid
    const grid: number[][] = input.split("\n").map((t: string) => t.split(" ").map(Number));
    let maxProduct = 0;
    // Be smart, loop over all and do / - \ and | for each number if it can be done
    for (let y: number = 0; y < grid.length; y++) {
        for (let x: number = 0; x < grid[y].length; x++) {
            if (x < grid[y].length - 4) {
                const horizontal: number = grid[y][x] * grid[y][x + 1] * grid[y][x + 2] * grid[y][x + 3];
                if (horizontal > maxProduct) {
                    maxProduct = horizontal;
                }
            }
            if (y < grid.length - 4) {
                const vertical: number = grid[y][x] * grid[y + 1][x] * grid[y + 2][x] * grid[y + 3][x];
                if (vertical > maxProduct) {
                    maxProduct = vertical;
                }
            }
            if (x < grid[y].length - 4 && y < grid.length - 4) {
                const rightDown: number = grid[y][x] * grid[y + 1][x + 1] * grid[y + 2][x + 2] * grid[y + 3][x + 3];
                if (rightDown > maxProduct) {
                    maxProduct = rightDown;
                }
            }
            if (x > 2 && y < grid.length - 4) {
                const leftDown: number = grid[y][x] * grid[y + 1][x - 1] * grid[y + 2][x - 2] * grid[y + 3][x - 3];
                if (leftDown > maxProduct) {
                    maxProduct = leftDown;
                }
            }
        }
    }
    return maxProduct;
}