import {numbersWithMaxSize} from "../utilities/sequences";

/**
 * <p>A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.</p>
 * <p>For example,
 * \begin{align}
 * &amp;44 \to 32 \to 13 \to 10 \to \mathbf 1 \to \mathbf 1\\
 * &amp;85 \to \mathbf{89} \to 145 \to 42 \to 20 \to 4 \to 16 \to 37 \to 58 \to \mathbf{89}
 * \end{align}
 * </p><p>Therefore any chain that arrives at $1$ or $89$ will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at $1$ or $89$.</p>
 * <p>How many starting numbers below ten million will arrive at $89$?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=92'>source</a></p>
 * <p><i><b>Average runtime ~1980 ms</b></i></p>
 */
export function run(): number {
    const boundary: number = 10000000;

    const endingIn89List: (boolean | undefined)[] = numbersWithMaxSize(boundary).map((n: number): boolean => undefined);
    endingIn89List[0] = false;
    endingIn89List[43] = false;
    endingIn89List[84] = true;
    endingIn89List[88] = true;

    for (let i: number = 2; i < boundary; i++) {
        let current: number = i;
        do {
            current = current.toString().split("").map(Number).reduce((acc, val) => acc + val ** 2, 0);
        } while (endingIn89List[current - 1] === undefined);
        endingIn89List[i - 1] = endingIn89List[current - 1];
    }
    return endingIn89List.filter((t: boolean | undefined): boolean => t).length;
}
