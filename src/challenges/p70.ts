import {numbersWithMaxSize} from "../utilities/sequences";
import {arePermutations} from "../utilities/strings";

// Average runtime ~2100 ms (needs optimization, also basic copy of 69 to begin with)
export function run(): number {
    const boundEx: number = 10 ** 7;
    // We use the sum property of the Euler's Totient function, which states that n = sum_{d|n}phi(d)
    const phis: number[] = [0, ...numbersWithMaxSize(boundEx)];
    // Every number n > 1 has at most n-1 proper divisors, so phi(n) <= n-1
    for (let i: number = 2; i <= boundEx; i++) {
        phis[i] = i - 1;
    }
    // Now loop and subtract phi(i) from all multiples of i
    for (let i: number = 2; i <= boundEx; i++) {
        for (let j: number = 2 * i; j <= boundEx; j += i) {
            phis[j] -= phis[i];
        }
    }
    let min: number = Infinity;
    const phiFactors: number[] = phis.map((phiN: number, n: number) => {
        const q: number = n / phiN;
        if (n > 1 && q < min && arePermutations(n.toString(), phiN.toString()))
            min = q;
        return q;
    });
    return phiFactors.indexOf(min);
}
