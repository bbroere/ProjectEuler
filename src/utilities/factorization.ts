import assert from "node:assert";

/**
 * Naively factorizes a given number n into its prime factors
 */
export function factorize(n: number): Map<number, number> {
    assert(n > 0);
    const res: Map<number, number> = new Map<number, number>();
    let remainder: number = n;
    for (let i: number = 2; remainder != 1; i++) {
        while (remainder / i == Math.floor(remainder / i)) {
            remainder = remainder / i;
            if (res.has(i)) {
                res.set(i, res.get(i) + 1);
            } else {
                res.set(i, 1);
            }
        }
    }
    return res;
}