import {isPrime, primesWithUpperBound} from "../utilities/factorization";
import {sum} from "../utilities/sequences";

// Average runtime ~48 ms
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
