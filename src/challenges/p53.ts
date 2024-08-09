import {binomialCoefficient} from "../utilities/numbers";

/**
 * <p>There are exactly ten ways of selecting three from five, 12345:</p>
 * <p class="center">123, 124, 125, 134, 135, 145, 234, 235, 245, and 345</p>
 * <p>In combinatorics, we use the notation, $\displaystyle \binom 5 3 = 10$.</p>
 * <p>In general, $\displaystyle \binom n r = \dfrac{n!}{r!(n-r)!}$, where $r \le n$, $n! = n \times (n-1) \times ... \times 3 \times 2 \times 1$, and $0! = 1$.
 * </p>
 * <p>It is not until $n = 23$, that a value exceeds one-million: $\displaystyle \binom {23} {10} = 1144066$.</p>
 * <p>How many, not necessarily distinct, values of $\displaystyle \binom n r$ for $1 \le n \le 100$, are greater than one-million?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=53'>source</a></p>
 * <p><i><b>Average runtime ~0.8 ms</b></i></p>
 */
export function run(): number {
    // The problem here will be the large numbers that start to form by doing the multiplication in the factorials
    // For this we need smart division and multiplication or use bigints
    // We will use bigints

    // We also know that if (n k) > x and k <= n/2, then(n (n-k)) > x as well by the symmetry of binomial coefficients
    // So the problem boils down to finding the smallest k for each n s.t. (n k) > 1000000
    // If we have k, we can find the amount by the formula (n+1) - 2k

    // Note that this can be improved by caching the factorials or maybe even by constructing a tree of factorials

    const startNInc: number = 23;
    const endNInc: number = 100;
    const boundaryEx: number = 1000000;

    let res: number = 0;
    for (let n: number = startNInc; n <= endNInc; n++) {
        let k: number = 1;
        while (binomialCoefficient(n, k) <= boundaryEx) {
            k++;
        }
        res += (n + 1) - 2 * k;
    }
    return res;
}
