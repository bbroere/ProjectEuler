import {sum} from "../utilities/sequences";
import {primesWithUpperBound} from "../utilities/factorization";

function allLeftAndRight(s: string): Set<number> {
    const res: Set<number> = new Set<number>();
    res.add(Number(s));
    for (let i: number = 1; i < s.length; i++) {
        res.add(Number(s.slice(0, i)));
        res.add(Number(s.slice(i)));
    }
    return res;
}

export function run(): number {
    const results: Set<number> = new Set();
    const upperBound: number = 1000000;
    const primes: Set<number> = new Set(primesWithUpperBound(upperBound));
    for (let i: number = 11; i < upperBound; i++) {
        const alr: Set<number> = allLeftAndRight(String(i));
        const overlap: Set<number> = new Set([...alr].filter(i => primes.has(i)));
        // Problem is a bit unclear. It appears the sub-primes don't count even though they do satisfy the condition
        if (overlap.size == alr.size)
            results.add(i);
    }
    return sum([...results]);
}
