import {generateAllPandigitals} from "../utilities/numbers";

/**
 * <p>The number, $1406357289$, is a $0$ to $9$ pandigital number because it is made up of each of the digits $0$ to $9$ in some order, but it also has a rather interesting sub-string divisibility property.</p>
 * <p>Let $d_1$ be the $1$<sup>st</sup> digit, $d_2$ be the $2$<sup>nd</sup> digit, and so on. In this way, we note the following:</p>
 * <ul><li>$d_2d_3d_4=406$ is divisible by $2$</li>
 * <li>$d_3d_4d_5=063$ is divisible by $3$</li>
 * <li>$d_4d_5d_6=635$ is divisible by $5$</li>
 * <li>$d_5d_6d_7=357$ is divisible by $7$</li>
 * <li>$d_6d_7d_8=572$ is divisible by $11$</li>
 * <li>$d_7d_8d_9=728$ is divisible by $13$</li>
 * <li>$d_8d_9d_{10}=289$ is divisible by $17$</li>
 * </ul><p>Find the sum of all $0$ to $9$ pandigital numbers with this property.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=43'>source</a></p>
 * <p><i><b>Average runtime ~1550 ms</b></i></p>
 */
export function run(): number {
    let result: number = 0;
    generateAllPandigitals(9, true)
        .forEach((p: number): void => {
            if (Math.floor(p / 1000000000) == 0) {
                return;
            }
            for (let i: number = 0; i <= 6; i++) {
                if (Math.floor((p % 10 ** (i+3)) / (10 ** i)) % [17, 13, 11, 7, 5, 3, 2][i] != 0) {
                    return;
                }
            }
            result += p;
        });
    return result;
}
