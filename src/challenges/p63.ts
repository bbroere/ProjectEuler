/**
 * <p>The $5$-digit number, $16807=7^5$, is also a fifth power. Similarly, the $9$-digit number, $134217728=8^9$, is a ninth power.</p>
 * <p>How many $n$-digit positive integers exist which are also an $n$th power?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=63'>source</a></p>
 * <p><i><b>Average runtime ~7 ms</b></i></p>
 */
export function run(): number {
    let res: number = 0;
    const upperBound: number = Math.floor(Math.sqrt(10 ** 9));
    for (let i: number = 1; i < upperBound; i++) {
        for (let j: number = 1; j < 10; j++) {
            const n: number = j ** i;
            if (n >= 10 ** (i - 1) && n < 10 ** i) {
                res++;
            }
        }
    }
    return res;
}
