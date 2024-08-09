import {champernowneConstant} from "../utilities/numbers";

/**
 * <p>An irrational decimal fraction is created by concatenating the positive integers:
 * $$0.12345678910{\color{red}\mathbf 1}112131415161718192021\cdots$$</p>
 * <p>It can be seen that the $12$<sup>th</sup> digit of the fractional part is $1$.</p>
 * <p>If $d_n$ represents the $n$<sup>th</sup> digit of the fractional part, find the value of the following expression.
 * $$d_1 \times d_{10} \times d_{100} \times d_{1000} \times d_{10000} \times d_{100000} \times d_{1000000}$$</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=40'>source</a></p>
 * <p><i><b>Average runtime ~6 ms</b></i></p>
 */
export function run(): number {
    const c: string = champernowneConstant(null, 1000000).slice(2);
    return parseInt(c[0]) * parseInt(c[9]) * parseInt(c[99]) * parseInt(c[999]) * parseInt(c[9999]) * parseInt(c[99999]) * parseInt(c[999999]);
}
