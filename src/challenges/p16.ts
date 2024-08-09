import {sum} from "../utilities/sequences";

/**
 * <p>$2^{15} = 32768$ and the sum of its digits is $3 + 2 + 7 + 6 + 8 = 26$.</p>
 * <p>What is the sum of the digits of the number $2^{1000}$?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=16'>source</a></p>
 * <p><i><b>Average runtime ~0.007 ms</b></i></p>
 */
export function run(): number {
    return sum((2n ** 1000n)
        .toString()
        .split("")
        .map(Number));
}
