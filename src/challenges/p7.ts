import {primeN} from "../utilities/factorization";

/**
 * <p>By listing the first six prime numbers: $2, 3, 5, 7, 11$, and $13$, we can see that the $6$th prime is $13$.</p>
 * <p>What is the $10\,001$st prime number?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=7'>source</a></p>
 * <p><i><b>Average runtime ~2.5 ms</b></i></p>
 */
export function run(): number {
    return primeN(10001);
}
