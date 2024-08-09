/**
 * <p>A unit fraction contains $1$ in the numerator. The decimal representation of the unit fractions with denominators $2$ to $10$ are given:</p>
 * \begin{align}
 * 1/2 &amp;= 0.5\\
 * 1/3 &amp;=0.(3)\\
 * 1/4 &amp;=0.25\\
 * 1/5 &amp;= 0.2\\
 * 1/6 &amp;= 0.1(6)\\
 * 1/7 &amp;= 0.(142857)\\
 * 1/8 &amp;= 0.125\\
 * 1/9 &amp;= 0.(1)\\
 * 1/10 &amp;= 0.1
 * \end{align}
 * <p>Where $0.1(6)$ means $0.166666\cdots$, and has a $1$-digit recurring cycle. It can be seen that $1/7$ has a $6$-digit recurring cycle.</p>
 * <p>Find the value of $d \lt 1000$ for which $1/d$ contains the longest recurring cycle in its decimal fraction part.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=26'>source</a></p>
 * <p><i><b>Average runtime ~0.8 ms</b></i></p>
 */
export function run(): number {
    // Let say n is coprime with both 2 and 5, i.e. has gcd of 1 with 10
    // If d is the period of repetition, then there is a b s.t. n * 10^(b+x*d) % 1 == n * 10^(b+(x+1)*d) % 1 for all x
    // This means that n * 10^b*10^(x*d) % 1 == n * 10^b*10^(x*d)*10^d % 1 for all x
    // So we deduce that 10^d must be 1 mod n as 10 and n are coprime
    // I read somewhere that if n and 10 are not coprime, and taking out all factors of 2 and 5 out of n gives a
    // remainder of q, then q and n have the same period :)
    let longest: number = 0;
    let result: number = 0;
    for (let i: number = 1; i < 1000; i++) {
        let n: number = i;
        while (n % 2 == 0) {
            n /= 2;
        }
        while (n % 5 == 0) {
            n /= 5;
        }
        if (n != 1) {
            let d: number = 1;
            // Keep intermediate result to keep the numbers low
            let r: number = 10 % n;
            while (![-1, 1].includes(r)) {
                d++;
                r *= 10;
                r %= n;
            }
            if (Math.pow(10, d) % n == -1) {
                d *= 2;
            }
            if (d > longest) {
                longest = d;
                result = i;
            }
        }
    }
    return result;
}
