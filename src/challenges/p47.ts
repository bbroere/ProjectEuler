import {factorize} from "../utilities/factorization";

/**
 * <p>The first two consecutive numbers to have two distinct prime factors are:</p>
 * \begin{align}
 * 14 &amp;= 2 \times 7\\
 * 15 &amp;= 3 \times 5.
 * \end{align}
 * <p>The first three consecutive numbers to have three distinct prime factors are:</p>
 * \begin{align}
 * 644 &amp;= 2^2 \times 7 \times 23\\
 * 645 &amp;= 3 \times 5 \times 43\\
 * 646 &amp;= 2 \times 17 \times 19.
 * \end{align}
 * <p>Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=47'>source</a></p>
 * <p><i><b>Average runtime ~330 ms</b></i></p>
 */
export function run(): number {
    const min: number = 125000;

    let p1: [number, boolean] = [min, factorize(min).size == 4];
    let p2: [number, boolean] = [min + 1, factorize(min + 1).size == 4];
    let p3: [number, boolean] = [min + 2, factorize(min + 2).size == 4];
    let p4: [number, boolean] = [min + 3, factorize(min + 3).size == 4];

    while (!(p1[1] && p2[1] && p3[1] && p4[1])) {
        p1 = p2;
        p2 = p3;
        p3 = p4;
        p4 = [p4[0] + 1, factorize(p4[0] + 1).size == 4];
    }
    return p1[0];
}
