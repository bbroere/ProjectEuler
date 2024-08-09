import {input} from "../inputs/p18";

/**
 * <p>By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is $23$.</p>
 * <p class="monospace center"><span class="red"><b>3</b></span><br><span class="red"><b>7</b></span> 4<br>
 * 2 <span class="red"><b>4</b></span> 6<br>
 * 8 5 <span class="red"><b>9</b></span> 3</p>
 * <p>That is, $3 + 7 + 4 + 9 = 23$.</p>
 * <p>Find the maximum total from top to bottom of the triangle below:</p>
 * <p class="monospace center">75<br>
 * 95 64<br>
 * 17 47 82<br>
 * 18 35 87 10<br>
 * 20 04 82 47 65<br>
 * 19 01 23 75 03 34<br>
 * 88 02 77 73 07 63 67<br>
 * 99 65 04 28 06 16 70 92<br>
 * 41 41 26 56 83 40 80 70 33<br>
 * 41 48 72 33 47 32 37 16 94 29<br>
 * 53 71 44 65 25 43 91 52 97 51 14<br>
 * 70 11 33 28 77 73 17 78 39 68 17 57<br>
 * 91 71 52 38 17 14 91 43 58 50 27 29 48<br>
 * 63 66 04 68 89 53 67 30 73 16 69 87 40 31<br>
 * 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23</p>
 * <p class="note"><b>NOTE:</b> As there are only $16384$ routes, it is possible to solve this problem by trying every route. However, <a href="problem=67">Problem 67</a>, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=18'>source</a></p>
 * <p><i><b>Average runtime ~0.014 ms</b></i></p>
 */
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
