import {numbersWithMaxSize} from "../utilities/sequences";

// Average runtime ~70 ms
export function run(): number {
    const bound: number = 1000000;

    // We use the sum property of the Euler's Totient function, which states that n = sum_{d|n}phi(d)
    const phis: number[] = [0, ...numbersWithMaxSize(bound)];
    // Every number n > 1 has at most n-1 proper divisors, so phi(n) <= n-1
    for (let i: number = 2; i <= bound; i++) {
        phis[i] = i - 1;
    }
    // Now loop and subtract phi(i) from all multiples of i
    for (let i: number = 2; i <= bound; i++) {
        for (let j: number = 2 * i; j <= bound; j += i) {
            phis[j] -= phis[i];
        }
    }
    let max: number = 0;
    const phiFactors: number[] = phis.map((phiN: number, n: number) => {
        if (n / phiN > max)
            max = n / phiN;
        return n / phiN;
    });
    return phiFactors.indexOf(max);
}
