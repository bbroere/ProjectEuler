import {isPandigital} from "../utilities/numbers";

/**
 * <p>Take the number $192$ and multiply it by each of $1$, $2$, and $3$:</p>
 * \begin{align}
 * 192 \times 1 &amp;= 192\\
 * 192 \times 2 &amp;= 384\\
 * 192 \times 3 &amp;= 576
 * \end{align}
 * <p>By concatenating each product we get the $1$ to $9$ pandigital, $192384576$. We will call $192384576$ the concatenated product of $192$ and $(1,2,3)$.</p>
 * <p>The same can be achieved by starting with $9$ and multiplying by $1$, $2$, $3$, $4$, and $5$, giving the pandigital, $918273645$, which is the concatenated product of $9$ and $(1,2,3,4,5)$.</p>
 * <p>What is the largest $1$ to $9$ pandigital $9$-digit number that can be formed as the concatenated product of an integer with $(1,2, \dots, n)$ where $n \gt 1$?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=38'>source</a></p>
 * <p><i><b>Average runtime ~1.5 ms</b></i></p>
 */
export function run(): number {
    // We're looking for the largest pandigital number that can be formed by multiplying an integer by (1, 2, ..., n)
    // So we are looking for n pandigital, s.t. there is an x < n and m > 1 s.t. n = C(x, (x(1..m)*)) where C is the concatenation function
    // and * is the spread operator
    // From this we can derive the following bounds:
    // m=2: 5123 <= n <= 9876 (5000 contains zeros and 9999 contains only nines)
    // m=3: 123 <= n <= 321 (100 contains zeros and 33 contains only threes)
    // m=4: 31 <= n <= 32 (31 is the smallest s.t. 4*31>100 and does not contain zeros or duplicates, 33 contains only threes)
    // m=5: 6 <= n <= 9 (5 is the smallest s.t. 6*2>9 and does not contain zeros or duplicates)
    // m=6: 2 <= n <= 3 (2 is the smallest s.t. 4*2>9 and does not contain zeros or duplicates, 3 is the biggest s.t. 3*3<10)

    const solutionSpace: Map<number, [number, number]> = new Map<number, [number, number]>([
        [2, [5123, 9876]],
        [3, [123, 321]],
        [4, [31, 32]],
        [5, [6, 9]],
        [6, [2, 3]]
    ]);
    let maxPandigital: number = -1;

    solutionSpace.forEach((bounds: [number, number], m: number) => {
        for (let i: number = bounds[0]; i <= bounds[1]; i++) {
            let res: string = '';
            for (let j: number = 1; j <= m; j++) {
                res += (i * j).toString();
            }
            if (isPandigital(res)) {
                maxPandigital = Math.max(maxPandigital, parseInt(res));
            }
        }
    });
    return maxPandigital;
}
