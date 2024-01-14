import assert from "node:assert";

/**
 * Checks if a number is a palindrome
 */
export function checkPalindrome(n: number): boolean {
    return `${n}` === `${n}`.split("").reverse().join("");
}

/**
 * Calculates LCM of 2 numbers
 */
export function lcm(a: number, b: number): number {
    let a_r: number = a;
    let b_r: number = b;
    while (a_r != b_r) {
        if (a_r < b_r) {
            a_r += a;
        } else {
            b_r += b;
        }
    }
    return a_r;
}

/**
 * Checks if a number is prime
 */
export function checkPrime(n: number): boolean {
    const limit: number = Math.ceil(n / 2);
    for (let i = 2; i < limit; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

/**
 * Checks for 2 numbers a and b if sqrt(a^2 + b^2) is an integer
 */
export function checkPythagoreanTriplet(a: number, b: number): boolean {
    const c = Math.sqrt(a * a + b * b);
    return Math.floor(c) == c;
}

/**
 * Calculates the number of prime factors a number has
 */
export function nofFactors(n: number): number {
    const res: Map<number, number> = new Map<number, number>();
    let remainder: number = n;
    let current: number = 2;
    while (remainder != 1) {
        if (remainder % current == 0) {
            if (res.has(current)) {
                res.set(current, res.get(current) + 1);
            } else {
                res.set(current, 1);
            }
            remainder = remainder / current;
        } else {
            current++;
        }
    }
    // If n = a^x*b^y*c^z.... then number of factors (including 1) is (x+1)(y+1)(z+1)...
    return [...res.values()].reduce((c, n) => c * (n + 1), 1);
}

/**
 * Sums all the factors of a number
 */
export function sumOfFactors(n: number): number {
    let res: number = 0;
    for (let i: number = 1; i < n; i++) {
        if (n % i == 0) {
            res += i;
        }
    }
    return res;
}

/**
 * Filters all duplicates
 */
export function filterListUnique<T>(l: T[]): T[] {
    return l.filter((v, i, a) => a.indexOf(v) === i);
}

/**
 * Recursively creates a list of all permutations of a set of strings
 */
export function lexicographicPermutations(l: string[]): string[] {
    assert(l.length > 0);
    if (l.length == 1) {
        return [l[0]];
    } else {
        const res = [];
        for (let i = 0; i < l.length; i++) {
            const newL = [...l.slice(0, i), ...l.slice(i + 1, l.length)];
            lexicographicPermutations(newL).map(s => l[i] + s).forEach(t => res.push(t));
        }
        return res;
    }
}

export function fibonacciWithCondition(c: (f: bigint) => boolean): [number, bigint] {
    let index: number = 2;
    let f1: bigint = BigInt(1);
    let f2: bigint = BigInt(1);
    while (!c(f2)) {
        index++;
        f2 = f1 + f2;
        f1 = f2 - f1;
    }
    return [index, f2];
}