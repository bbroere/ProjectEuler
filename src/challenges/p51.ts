import {isPrime, primesWithUpperBound} from "../utilities/factorization";
import {groupBy, mapMapValues} from "../utilities/sequences";

// Average runtime ~35 ms
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
