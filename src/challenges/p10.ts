import {sum} from "../utilities/sequences";
import {primesWithUpperBound} from "../utilities/factorization";

/**
 * <p>The sum of the primes below $10$ is $2 + 3 + 5 + 7 = 17$.</p>
 * <p>Find the sum of all the primes below two million.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=10'>source</a></p>
 * <p><i><b>Average runtime ~58 ms</b></i></p>
 */
export function run(): number {
    return sum(primesWithUpperBound(2000000));
}
