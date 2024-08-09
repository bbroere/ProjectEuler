import {primesWithUpperBound} from "../utilities/factorization";
import {numbersWithMaxSize} from "../utilities/sequences";

/**
 * <p>It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.</p>
 * \begin{align}
 * 9 = 7 + 2 \times 1^2\\
 * 15 = 7 + 2 \times 2^2\\
 * 21 = 3 + 2 \times 3^2\\
 * 25 = 7 + 2 \times 3^2\\
 * 27 = 19 + 2 \times 2^2\\
 * 33 = 31 + 2 \times 1^2
 * \end{align}
 * <p>It turns out that the conjecture was false.</p>
 * <p>What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=46'>source</a></p>
 * <p><i><b>Average runtime ~6.5 ms</b></i></p>
 */
export function run(): number {
    const primesUpperBound: number = 10000;
    const nofSquares: number = 50;
    const P: number[] = primesWithUpperBound(primesUpperBound);
    const Q: number[] = numbersWithMaxSize(nofSquares + 1).map((i: number) => 2 * i * i);
    const N: number[] = P.flatMap((p: number) => Q.map(q => p + q));
    for (let i: number = 3; i < P.slice(-1)[0]; i += 2) {
        if (!N.includes(i) && !P.includes(i) && i % 2 != 0) {
            return i;
        }
    }
}
