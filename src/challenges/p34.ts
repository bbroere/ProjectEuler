import {factorial} from "../utilities/numbers";

/**
 * <p>$145$ is a curious number, as $1! + 4! + 5! = 1 + 24 + 120 = 145$.</p>
 * <p>Find the sum of all numbers which are equal to the sum of the factorial of their digits.</p>
 * <p class="smaller">Note: As $1! = 1$ and $2! = 2$ are not sums they are not included.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=34'>source</a></p>
 * <p><i><b>Average runtime ~450 ms</b></i></p>
 */
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
