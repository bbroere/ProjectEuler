import {isPrime, primesWithUpperBound} from "../utilities/factorization";

/**
 * <p>The number, $197$, is called a circular prime because all rotations of the digits: $197$, $971$, and $719$, are themselves prime.</p>
 * <p>There are thirteen such primes below $100$: $2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79$, and $97$.</p>
 * <p>How many circular primes are there below one million?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=35'>source</a></p>
 * <p><i><b>Average runtime ~99 ms</b></i></p>
 */
export function run(): number {
    const primes: number[] = primesWithUpperBound(1000000);
    const res: Set<number> = new Set<number>();
    for (const p of primes) {
        const pStringArray: string[] = `${p}`.split("");
        let failed: boolean = false;
        for (let i: number = 0; i < pStringArray.length && !failed; i++) {
            failed = !isPrime(Number(pStringArray.slice(i).join("") + pStringArray.slice(0, i).join("")));
        }
        if(!failed) {
            res.add(p);
        }
    }
    return res.size;
}
