import {numbersWithMaxSize, sum} from "../utilities/sequences";

/**
 * <p>If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.</p>
 * <p>Find the sum of all the multiples of $3$ or $5$ below $1000$.</p>
 *
 * <p>Generated on 2024-08-09 with <a href='https://projecteuler.net/problem=1'>source</a></p>
 * <p><i><b>Average runtime ~??? ms</b></i></p>
 */
export function run(): number {
    return sum(numbersWithMaxSize(999), (i: number) => i % 3 == 0 || i % 5 == 0);
}
