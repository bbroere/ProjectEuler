import {numbersWithMaxSize, sum} from "../utilities/sequences";
import {bigintSqrt} from "../utilities/numbers";

/**
 * <p>It is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.</p>
 * <p>The square root of two is $1.41421356237309504880\cdots$, and the digital sum of the first one hundred decimal digits is $475$.</p>
 * <p>For the first one hundred natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=80'>source</a></p>
 * <p><i><b>Average runtime ~6.5 ms</b></i></p>
 */
export function run(): number {
    const max: number = 100;
    const allNumbers: number[] = [0, ...numbersWithMaxSize(max)];
    for (let i: number = 1; i <= Math.sqrt(max); i++)
        allNumbers[i ** 2] = 0;
    let s: number = 0;
    for (let i: number = 0; i <= max; i++) {
        s += sum(bigintSqrt(100n ** 99n * BigInt(allNumbers[i])).toString().split("").map(Number));
    }
    return s;
}
