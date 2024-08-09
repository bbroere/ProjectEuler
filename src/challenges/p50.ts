import {isPrime, primesWithUpperBound} from "../utilities/factorization";
import {sum} from "../utilities/sequences";

/**
 * <p>The prime $41$, can be written as the sum of six consecutive primes:</p>
 * $$41 = 2 + 3 + 5 + 7 + 11 + 13.$$
 * <p>This is the longest sum of consecutive primes that adds to a prime below one-hundred.</p>
 * <p>The longest sum of consecutive primes below one-thousand that adds to a prime, contains $21$ terms, and is equal to $953$.</p>
 * <p>Which prime, below one-million, can be written as the sum of the most consecutive primes?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=50'>source</a></p>
 * <p><i><b>Average runtime ~48 ms</b></i></p>
 */
export function run(): number {
    const primes: number[] = primesWithUpperBound(1000000);
    const checkMax: number = primes.slice(-1)[0];
    let currentMax: [number, number] = [-1, -1];
    const minSeqLength: number = 21;
    for (let i: number = 0; i < primes.length && i + currentMax[1] < primes.length; i++) {
        let r: number = sum(primes.slice(i, i + minSeqLength));
        for (let j: number = i + minSeqLength; j < primes.length; j++) {
            r += primes[j];
            if (r > checkMax) {
                break;
            }
            const nofPrimesUsed: number = j - i + 1;
            if (isPrime(r) && nofPrimesUsed > currentMax[1]) {
                currentMax = [r, nofPrimesUsed];
            }
        }
    }
    return currentMax[0];
}
