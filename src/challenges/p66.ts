import {minimalPellSolution} from "../utilities/numbers";

/**
 * <p>Consider quadratic Diophantine equations of the form:
 * $$x^2 - Dy^2 = 1$$</p>
 * <p>For example, when $D=13$, the minimal solution in $x$ is $649^2 - 13 \times 180^2 = 1$.</p>
 * <p>It can be assumed that there are no solutions in positive integers when $D$ is square.</p>
 * <p>By finding minimal solutions in $x$ for $D = \{2, 3, 5, 6, 7\}$, we obtain the following:</p>
 * \begin{align}
 * 3^2 - 2 \times 2^2 &amp;= 1\\
 * 2^2 - 3 \times 1^2 &amp;= 1\\
 * {\color{red}{\mathbf 9}}^2 - 5 \times 4^2 &amp;= 1\\
 * 5^2 - 6 \times 2^2 &amp;= 1\\
 * 8^2 - 7 \times 3^2 &amp;= 1
 * \end{align}
 * <p>Hence, by considering minimal solutions in $x$ for $D \le 7$, the largest $x$ is obtained when $D=5$.</p>
 * <p>Find the value of $D \le 1000$ in minimal solutions of $x$ for which the largest value of $x$ is obtained.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=66'>source</a></p>
 * <p><i><b>Average runtime ~10 ms</b></i></p>
 */
export function run(): number {
    const boundInc: number = 1000;
    let currentMax: [number, bigint] = [0, 0n];
    for (let D = 2; D <= boundInc; D++) {
        // Too slow to check if D is square twice, so just assume length 0 (which is even so does not count)
        const [x, y] = minimalPellSolution(D) ?? [0n, 0n];
        if (x > currentMax[1])
            currentMax = [D, x];
    }
    return currentMax[0];
}
