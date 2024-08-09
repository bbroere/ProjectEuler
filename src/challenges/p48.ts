/**
 * <p>The series, $1^1 + 2^2 + 3^3 + \cdots + 10^{10} = 10405071317$.</p>
 * <p>Find the last ten digits of the series, $1^1 + 2^2 + 3^3 + \cdots + 1000^{1000}$.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=48'>source</a></p>
 * <p><i><b>Average runtime ~11 ms</b></i></p>
 */
export function run(): number {
    const max: number = 1000;
    const nofDigits: number = 10;
    let res: number = 0;
    for (let i: number = 1; i < max; i++) {
        let r: number = 1;
        for (let j: number = 1; j <= i; j++) {
            r = (r * i) % 10 ** nofDigits;
        }
        res = (res + r) % 10 ** nofDigits;
    }
    return res;
}
