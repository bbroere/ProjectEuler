import {groupBy} from "../utilities/sequences";
import {pythagoreanTripletsWithSumBound} from "../utilities/geometry";

/**
 * <p>If $p$ is the perimeter of a right angle triangle with integral length sides, $\{a, b, c\}$, there are exactly three solutions for $p = 120$.</p>
 * <p>$\{20,48,52\}$, $\{24,45,51\}$, $\{30,40,50\}$</p>
 * <p>For which value of $p \le 1000$, is the number of solutions maximised?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=39'>source</a></p>
 * <p><i><b>Average runtime ~0.16 ms</b></i></p>
 */
export function run(): number {
    // Define S_p = { {a,b,c} | a, b, c natural numbers s.t. a^2+b^2=c^2 and a+b+c=p }
    // We're looking for p <= 1000 s.t. |S_p| >= |S_q| for all q <= 1000
    // From the question we can assume p is unique
    return Array.from(
        groupBy(
            pythagoreanTripletsWithSumBound(1000),
            (t: [number, number, number]) => t.reduce((a: number, b: number) => a + b)
        )
    )
        .map((v: [number, [number, number, number][]]) => [v[0], v[1].length])
        .sort((a: [number, number], b: [number, number]) => b[1] - a[1])[0][0];
}
