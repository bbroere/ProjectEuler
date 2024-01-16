import assert from "node:assert";

/**
 * Naively factorizes a given number n into its prime factors
 */
export function factorize(n: number): Map<number, number> {
    assert(n > 0, 'factorize');
    const res: Map<number, number> = new Map<number, number>();
    let remainder: number = n;
    for (let i: number = 2; remainder != 1; i++) {
        while (Number.isInteger(remainder / i)) {
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

/**
 * Calculate number of divisors of a number based on the factorization of that number
 */
export function numberOfDivisors(n: number): number {
    assert(n > 0, 'numberOfDivisors');
    const factors: Map<number, number> = factorize(n);
    return [...factors.values()].reduce((c: number, n: number) => c * (n + 1), 1);
}

/**
 * Recursively finds all permutations of a given factorization f
 * I.e. f = [[2,2],[5,1]] it returns [2^0*5^0, 2^0*5^1, 2^1*5^0, 2^1*5^1, 2^2*5^0, 2^2*5^1]
 */
function _factorizationPermutationRecursion(f: [number, number][]): number[] {
    assert(f.length > 0, '_factorizationPermutationRecursion');
    const n: [number, number] = f.pop();
    const r: number[] = [];
    for (let i: number = 0; i <= n[1]; i++) {
        r.push(Math.pow(n[0], i));
    }
    if (f.length == 0) { // 0 as we already popped!
        // Base case
        return r;
    } else {
        // Recursive case
        const p: number[] = _factorizationPermutationRecursion(f);
        return r.flatMap((v: number) => p.map((vp: number) => vp * v));
    }
}

/**
 * Returns a list of all divisors of a given number n by factorizing, and then constructing the divisors
 */
export function allDivisors(n: number): number[] {
    return _factorizationPermutationRecursion([...factorize(n).entries()]);
}

/**
 * Returns a list of all proper divisors of a given number n by factorizing, and then constructing the divisors
 */
export function properDivisors(n: number): number[] {
    return _factorizationPermutationRecursion([...factorize(n).entries()]).filter((t: number): boolean => t != n);
}

/**
 * Generates a list of prime numbers with an upperbound (included)
 */
export function primesWithUpperBound(upperBound: number): number[] {
    assert(upperBound > 1, 'primesWithUpperBound');
    const primesList: number[] = [...Array(upperBound + 1).keys()];
    primesList[1] = 0;
    for (let i: number = 2; i < primesList.length; i++) {
        const p: number = primesList[i];
        if (p != 0) {
            let x: number = 2 * p;
            while (x <= upperBound) {
                primesList[x] = 0;
                x += p;
            }
        }
    }
    return primesList.filter((t: number): boolean => t != 0);
}

/**
 * Calculates the nth prime by generating a full list of all primes until a mathematical upperbound is met
 */
export function primeN(n: number): number {
    assert(n > 0, 'primeN');
    // Determine upper bound by p_n < n * (log(n) + log(log(n)))
    // Note this only holds for n >= 6, so do a maximum of 11 (5th prime) and this number
    const upperbound: number = Math.max(11, Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))));
    const allPrimes: number[] = primesWithUpperBound(upperbound);
    assert(allPrimes.length >= n, 'primeN-2');
    return allPrimes[n - 1];
}
