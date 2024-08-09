import {primesWithUpperBound} from "../utilities/factorization";

/**
 * <p>Euler discovered the remarkable quadratic formula:</p>
 * <p class="center">$n^2 + n + 41$</p>
 * <p>It turns out that the formula will produce $40$ primes for the consecutive integer values $0 \le n \le 39$. However, when $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ is divisible by $41$, and certainly when $n = 41, 41^2 + 41 + 41$ is clearly divisible by $41$.</p>
 * <p>The incredible formula $n^2 - 79n + 1601$ was discovered, which produces $80$ primes for the consecutive values $0 \le n \le 79$. The product of the coefficients, $-79$ and $1601$, is $-126479$.</p>
 * <p>Considering quadratics of the form:</p>
 * <blockquote>
 * $n^2 + an + b$, where $|a| &lt; 1000$ and $|b| \le 1000$<br><br><div>where $|n|$ is the modulus/absolute value of $n$<br>e.g. $|11| = 11$ and $|-4| = 4$</div>
 * </blockquote>
 * <p>Find the product of the coefficients, $a$ and $b$, for the quadratic expression that produces the maximum number of primes for consecutive values of $n$, starting with $n = 0$.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=27'>source</a></p>
 * <p><i><b>Average runtime ~2000 ms</b></i></p>
 */
export function run(): number {
    const lb: number = -999;
    const ub: number = 999;
    let bestNofPrimes: [number, number, number] = [-1, 0, 0];
    // Low-ball, we up it if need be, but inclusion is faster the smaller the array is
    let primesBound: number = 100;
    let primes: number[] = primesWithUpperBound(primesBound);
    for (let a: number = lb; a <= ub; a++)
        for (let b: number = lb; b <= ub; b++) {
            const l: number = lengthStartingPrimeSequence(primes, a, b);
            if (l == -1) {
                primesBound *= 2;
                primes = primesWithUpperBound(primesBound);
                b--;
            }
            if (l > bestNofPrimes[0]) bestNofPrimes = [l, a, b];
        }
    return bestNofPrimes[1] * bestNofPrimes[2];
}

function lengthStartingPrimeSequence(primes: number[], a: number, b: number): number {
    let n: number = 0;
    while (primes.includes(n * n + a * n + b))
        n++;
    // If this happens the list of primes was too small
    if (n * n + a * n + b > primes.slice(-1)[0])
        return -1;
    return n;
}
