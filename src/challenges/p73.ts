import {gcd} from "../utilities/numbers";

/**
 * <p>Consider the fraction, $\dfrac n d$, where $n$ and $d$ are positive integers. If $n \lt d$ and $\operatorname{HCF}(n, d)=1$, it is called a reduced proper fraction.</p>
 * <p>If we list the set of reduced proper fractions for $d \le 8$ in ascending order of size, we get:
 * $$\frac 1 8, \frac 1 7, \frac 1 6, \frac 1 5, \frac 1 4, \frac 2 7, \frac 1 3, \mathbf{\frac 3 8, \frac 2 5, \frac 3 7}, \frac 1 2, \frac 4 7, \frac 3 5, \frac 5 8, \frac 2 3, \frac 5 7, \frac 3 4, \frac 4 5, \frac 5 6, \frac 6 7, \frac 7 8$$</p>
 * <p>It can be seen that there are $3$ fractions between $\dfrac 1 3$ and $\dfrac 1 2$.</p>
 * <p>How many fractions lie between $\dfrac 1 3$ and $\dfrac 1 2$ in the sorted set of reduced proper fractions for $d \le 12\,000$?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=73'>source</a></p>
 * <p><i><b>Average runtime ~800 ms</b></i></p>
 */
export function run(): number {
    const upperBoundInc: number = 12_000;
    let result: number = 0;
    // We can skip d=1 (only has 1/1), d=2 (only has 1/2, which is a bound) and d=3 (only has 1/3, which is a bound)
    for (let d = 4; d <= upperBoundInc; d++) {
        const leftBound: number = Math.ceil(d / 3);
        const rightBound: number = Math.floor(d / 2);
        let currentSum = 0;
        for (let n = leftBound; n <= rightBound; n++)
            if (gcd(n, d) === 1)
                currentSum++;
        result += currentSum;
    }
    return result;
}
