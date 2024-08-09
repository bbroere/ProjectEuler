import {sum} from "../utilities/sequences";

/**
 * <p>Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
 * \begin{align}
 * 1634 &amp;= 1^4 + 6^4 + 3^4 + 4^4\\
 * 8208 &amp;= 8^4 + 2^4 + 0^4 + 8^4\\
 * 9474 &amp;= 9^4 + 4^4 + 7^4 + 4^4
 * \end{align}
 * </p><p class="smaller">As $1 = 1^4$ is not a sum it is not included.</p>
 * <p>The sum of these numbers is $1634 + 8208 + 9474 = 19316$.</p>
 * <p>Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=30'>source</a></p>
 * <p><i><b>Average runtime ~800 ms</b></i></p>
 */
export function run(): number {
    const power: number = 5;
    const ub: number = upperBound(power);
    const res: number[] = [];
    for (let n: number = 2; n < ub; n++) {
        if (`${n}`.split("").map(Number).reduce((c: number, n: number) => c + Math.pow(n, power), 0) == n) {
            res.push(n);
        }
    }
    return sum(res);
}

function upperBound(p: number): number {
    // This problem has no solution for integers with n digits if n*9^p < 10^(n-1)
    let n: number = 1;
    while (Math.pow(10, n - 1) / n < Math.pow(9, p)) {
        n++;
    }
    return Math.ceil(Math.pow(10, n) / n);
}
