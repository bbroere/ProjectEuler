import {primesWithUpperBound} from "../utilities/primes";
import {filterUnique} from "../utilities/sequences";

export function run(): number {
    const primes: number[] = primesWithUpperBound(10000).filter((t: number): boolean => t > 1000);
    for (let i: number = 0; i < primes.length - 1; i++) {
        for (let j: number = i + 1; j < primes.length; j++) {
            const k: number = primes[j] + (primes[j] - primes[i]);
            const r: number = Number(`${primes[i]}${primes[j]}${k}`);
            const nofChars: number = filterUnique([...r.toString()]).length;
            if (
                primes.includes(k) &&
                primes[i] != 1487 &&
                filterUnique([...primes[i].toString()]).length == nofChars &&
                filterUnique([...primes[j].toString()]).length == nofChars &&
                filterUnique([...k.toString()]).length == nofChars
            ) {
                return Number(`${primes[i]}${primes[j]}${k}`);
            }
        }
    }
    return undefined;
}
