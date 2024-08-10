import {primesWithUpperBound} from "../utilities/factorization";
import {numbersWithMaxSize} from "../utilities/sequences";

/**
 * <p>It is possible to write ten as the sum of primes in exactly five different ways:</p>
 * \begin{align}
 * &amp;7 + 3\\
 * &amp;5 + 5\\
 * &amp;5 + 3 + 2\\
 * &amp;3 + 3 + 2 + 2\\
 * &amp;2 + 2 + 2 + 2 + 2
 * \end{align}
 * <p>What is the first value which can be written as the sum of primes in over five thousand different ways?</p>
 *
 * <p>Generated on 2024-08-10 from <a href='https://projecteuler.net/problem=77'>source</a></p>
 * <p><i><b>Average runtime ~0.01 ms</b></i></p>
 */
export function run(): number {
    // Unfortunately, we can't use our partitionNumber function as it is not optimized for this problem
    // So we do this dynamically.
    const target: number = 5000;
    const primesBoundInc: number = 100;
    const primes: number[] = primesWithUpperBound(primesBoundInc);

    const results = numbersWithMaxSize(primesBoundInc + 1).fill(0);
    results[0] = 1; // 0 can be represented in 1 way, by not using any prime

    // Loop over all primes and add the number of ways to represent the number with that prime
    for (let p = 0; p < primes.length; p++)
        for (let i = primes[p]; i < primesBoundInc; i++)
            results[i] += results[i - primes[p]];

    return results.findIndex((t: number): boolean => t > target);
}
