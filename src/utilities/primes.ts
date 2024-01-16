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

/**
 * Generates a list of prime numbers with an upperbound (included)
 */
export function primesWithUpperBound(upperBound: number): number[] {
    assert(upperBound > 1);
    const primesList: number[] = [...Array(upperBound + 1).keys()];
    primesList[1] = 0;
    for (let i: number = 2; i < primesList.length; i++) {
        const p: number = primesList[i];
        if (p != 0) {
            let x = 2 * p;
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
    assert(n > 0);
    // Determine upper bound by p_n < n * (log(n) + log(log(n)))
    // Note this only holds for n >= 6, so do a maximum of 11 (5th prime) and this number
    const upperbound: number = Math.max(11, Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))));
    const allPrimes: number[] = primesWithUpperBound(upperbound);
    assert(allPrimes.length >= n);
    return allPrimes[n - 1];
}

/**
 * Checks if a number is prime by just checking it divisors
 */
export function checkPrime(n: number): boolean {
    const limit: number = Math.ceil(n / 2);
    for (let i: number = 2; i < limit; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}