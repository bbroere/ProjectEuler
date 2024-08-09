import {factorize} from "../utilities/factorization";

/**
 * <p>The prime factors of $13195$ are $5, 7, 13$ and $29$.</p>
 * <p>What is the largest prime factor of the number $600851475143$?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=3'>source</a></p>
 * <p><i><b>Average runtime ~0.03 ms</b></i></p>
 */
export function run(): number {
    return Math.max(...factorize(600851475143).keys());
}
