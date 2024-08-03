import {factorial} from "../utilities/numbers";

// Average runtime ~450 ms
export function run(): number {
    const factorials: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(factorial).map(Number);
    // For a number n with a > 1 digits, the maximum sum of the factorials can be a*(9!)
    // So a*9! must be bigger than n
    // We also know that n >= 10^(a-1) as it has a digits.
    // So a*(9!) > 10^(a-1), thus a <= 7.4 < 8
    // With this we find a limit on n of 10^7 - 1
    let res: number = 0;
    for (let n: number = 10; n < 10 ** 7; n++) {
        const factsSum = `${n}`.split("").reduce((c: number, n: string) => c += factorials[parseInt(n)], 0);
        res += factsSum == n ? n : 0;
    }
    return res;
}
