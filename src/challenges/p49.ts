import {isPrime, primesWithUpperBound} from "../utilities/factorization";
import {filterUnique} from "../utilities/sequences";

// Average runtime ~9.3 ms
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
