import {isPrime, primesWithUpperBound} from "../utilities/factorization";
import {groupBy, mapMapValues} from "../utilities/sequences";

/**
 * <p>By replacing the 1<sup>st</sup> digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.</p>
 * <p>By replacing the 3<sup>rd</sup> and 4<sup>th</sup> digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.</p>
 * <p>Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=51'>source</a></p>
 * <p><i><b>Average runtime ~35 ms</b></i></p>
 */
export function run(): number {
    const maxForPrimes: number = 1000000;
    const familySize: number = 8;
    const minToChangeDigits: number = Math.ceil(Math.log2(familySize));

    const primes: number[] = primesWithUpperBound(maxForPrimes);
    for (let i: number = 0; i < primes.length; i++) {
        const prime: number = primes[i];
        const charCountMap: Map<string, number> = mapMapValues(
            groupBy([...prime.toString()], (t: string) => t),
            (t: string[]) => t.length,
            (p: [string, string[]]): boolean => p[1].length >= minToChangeDigits
        );
        for (let j: number = 0; j < charCountMap.size; j++) {
            const family: number[] = [];
            for (let k: number = 0; k < 10; k++) {
                const possNewPrime: number = parseInt(
                    prime.toString().replaceAll(
                        Array.from(charCountMap.keys())[j], k.toString()
                    )
                );
                if (isPrime(possNewPrime) && [...possNewPrime.toString()].length == [...prime.toString()].length) {
                    family.push(possNewPrime);
                }
            }
            if (family.length === familySize) {
                return family[0];
            }
        }
    }
    return undefined;
}
