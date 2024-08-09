import {isPrime, primesWithUpperBound} from "../utilities/factorization";
import {filterUnique} from "../utilities/sequences";

/**
 * <p>The arithmetic sequence, $1487, 4817, 8147$, in which each of the terms increases by $3330$, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the $4$-digit numbers are permutations of one another.</p>
 * <p>There are no arithmetic sequences made up of three $1$-, $2$-, or $3$-digit primes, exhibiting this property, but there is one other $4$-digit increasing sequence.</p>
 * <p>What $12$-digit number do you form by concatenating the three terms in this sequence?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=49'>source</a></p>
 * <p><i><b>Average runtime ~9.3 ms</b></i></p>
 */
export function run(): number {
    const primes: number[] = primesWithUpperBound(9999).filter((t: number): boolean => t > 1487);
    for (let i: number = 0; i < primes.length - 1; i++) {
        for (let j: number = i + 1; j < primes.length; j++) {
            const p1: number = primes[i];
            const p2: number = primes[j];
            const k: number = p2 + (p2 - p1);
            if (isPrime(k) && k < 10000) {
                const r: number = Number(`${p1}${p2}${k}`);
                const nofChars: number = filterUnique([...r.toString()]).length;
                if (
                    filterUnique([...p1.toString()]).length == nofChars &&
                    filterUnique([...p2.toString()]).length == nofChars &&
                    filterUnique([...k.toString()]).length == nofChars
                ) {
                    return r;
                }
            }
        }
    }
    return undefined;
}
