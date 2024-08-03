import {primesWithUpperBound} from "../utilities/factorization";

// Average runtime 2000 ms
export function run(): number {
    const lb: number = -999;
    const ub: number = 999;
    let bestNofPrimes: [number, number, number] = [-1, 0, 0];
    // Low-ball, we up it if need be, but inclusion is faster the smaller the array is
    let primesBound: number = 100;
    let primes: number[] = primesWithUpperBound(primesBound);
    for (let a: number = lb; a <= ub; a++) {
        for (let b: number = lb; b <= ub; b++) {
            const l: number = lengthStartingPrimeSequence(primes, a, b);
            if (l == -1) {
                primesBound *= 2;
                primes = primesWithUpperBound(primesBound);
                b--;
            }
            if (l > bestNofPrimes[0]) bestNofPrimes = [l, a, b];
        }
    }
    return bestNofPrimes[1] * bestNofPrimes[2];
}

function lengthStartingPrimeSequence(primes: number[], a: number, b: number): number {
    let n: number = 0;
    while (primes.includes(n * n + a * n + b)) {
        n++;
    }
    // If this happens the list of primes was too small
    if (n * n + a * n + b > primes.slice(-1)[0]) {
        return -1;
    }
    return n;
}
