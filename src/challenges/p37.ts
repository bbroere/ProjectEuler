import {isPrime} from "../utilities/factorization";

/**
 * <p>The number $3797$ has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: $3797$, $797$, $97$, and $7$. Similarly we can work from right to left: $3797$, $379$, $37$, and $3$.</p>
 * <p>Find the sum of the only eleven primes that are both truncatable from left to right and right to left.</p>
 * <p class="smaller">NOTE: $2$, $3$, $5$, and $7$ are not considered to be truncatable primes.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=37'>source</a></p>
 * <p><i><b>Average runtime ~94 ms</b></i></p>
 */
export function run(): number {
    const upperBound: number = 1000000;
    let resultSum: number = 0;
    for (let i: number = 11; i < upperBound; i++) {
        const s: string = String(i);
        let allRotationsPrime: boolean = true;
        for (let j: number = 1; j < s.length && allRotationsPrime; j++) {
            allRotationsPrime = isPrime(Number(s.slice(j))) && isPrime(Number(s.slice(0, j)));
        }
        if (isPrime(i) && allRotationsPrime) {
            resultSum += i;
        }
    }
    return resultSum;
}
