import {input} from "../inputs/p18";

function findLongestPathSum(triangle: number[][]): number {
    // Base case
    if (triangle.length == 2) {
        return triangle[0][0] + Math.max(...triangle[1]);
    } else {
        // Make it one smaller and determine max of the sub triangles
        const leftTriangle: number[][] = [];
        const rightTriangle: number[][] = [];
        for (const row of triangle.slice(1)) {
            leftTriangle.push(row.slice(0, row.length - 1));
            rightTriangle.push(row.slice(1));
        }
        return triangle[0][0] + Math.max(findLongestPathSum(leftTriangle), findLongestPathSum(rightTriangle));
    }
}

export function run(): number {
    const triangle: number[][] = input.split("\n").map(t => t.split(" ").map(Number));
    return findLongestPathSum(triangle);
}