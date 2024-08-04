import {input} from "../inputs/p18";

// Average runtime ~0.014 ms
export function run(): number {
    const triangle: number[][] = input.split("\n").map((t: string) => t.split(" ").map(Number));
    return p18Public(triangle);
}

export function p18Public(triangle: number[][]): number{
    for (let i: number = 1; i < triangle.length; i++) {
        for (let j: number = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i - 1][j - 1] || 0, triangle[i - 1][j] || 0);
        }
    }
    return Math.max(...triangle[triangle.length - 1]);
}
