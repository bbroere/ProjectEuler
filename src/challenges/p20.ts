import {sum} from "../utilities/sequences";
import {factorial} from "../utilities/numbers";

/**
 * <p>$n!$ means $n \times (n - 1) \times \cdots \times 3 \times 2 \times 1$.</p>
 * <p>For example, $10! = 10 \times 9 \times \cdots \times 3 \times 2 \times 1 = 3628800$,<br>and the sum of the digits in the number $10!$ is $3 + 6 + 2 + 8 + 8 + 0 + 0 = 27$.</p>
 * <p>Find the sum of the digits in the number $100!$.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=20'>source</a></p>
 * <p><i><b>Average runtime ~0.006 ms</b></i></p>
 */
export function run(): number {
    return sum(factorial(100)
        .toString()
        .split("")
        .map(Number));
}
