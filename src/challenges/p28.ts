/**
 * <p>Starting with the number $1$ and moving to the right in a clockwise direction a $5$ by $5$ spiral is formed as follows:</p>
 * <p class="monospace center"><span class="red"><b>21</b></span> 22 23 24 <span class="red"><b>25</b></span><br>
 * 20  <span class="red"><b>7</b></span>  8  <span class="red"><b>9</b></span> 10<br>
 * 19  6  <span class="red"><b>1</b></span>  2 11<br>
 * 18  <span class="red"><b>5</b></span>  4  <span class="red"><b>3</b></span> 12<br><span class="red"><b>17</b></span> 16 15 14 <span class="red"><b>13</b></span></p>
 * <p>It can be verified that the sum of the numbers on the diagonals is $101$.</p>
 * <p>What is the sum of the numbers on the diagonals in a $1001$ by $1001$ spiral formed in the same way?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=28'>source</a></p>
 * <p><i><b>Average runtime ~0.001 ms</b></i></p>
 */
export function run(): number {
    const maxSize: number = 1001;
    let res: number = 1;
    let index: number = 1;
    let stepSize: number = 2;
    while (index < maxSize * maxSize) {
        for (let i: number = 1; i < 5; i++) {
            index += stepSize;
            res += index;
        }
        stepSize += 2;
    }
    return res;
}
