import {factorial} from "../utilities/numbers";

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
        while (factorial(n) / (factorial(k) * factorial(n - k)) <= boundaryEx) {
            k++;
        }
        res += (n + 1) - 2 * k;
    }
    return res;
}
