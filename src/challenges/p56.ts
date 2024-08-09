import {sum} from "../utilities/sequences";

/**
 * <p>A googol ($10^{100}$) is a massive number: one followed by one-hundred zeros; $100^{100}$ is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only $1$.</p>
 * <p>Considering natural numbers of the form, $a^b$, where $a, b \lt 100$, what is the maximum digital sum?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=56'>source</a></p>
 * <p><i><b>Average runtime ~17 ms</b></i></p>
 */
export function run(): number {
    const max: number = 100;
    let res: number = 0;
    for (let a: number = 1; a < max; a++) {
        for (let b: number = 1; b < max; b++) {
            const power: string = (BigInt(a) ** BigInt(b)).toString();
            res = Math.max(res, sum([...power].map((c: string) => parseInt(c))));
        }
    }
    return res;
}
