import {isPrime, primesWithUpperBound} from "../utilities/factorization";

// Average runtime ~99 ms
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
