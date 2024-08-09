import {factorial} from "../utilities/numbers";

/**
 * <p>The number $145$ is well known for the property that the sum of the factorial of its digits is equal to $145$:
 * $$1! + 4! + 5! = 1 + 24 + 120 = 145.$$</p>
 * <p>Perhaps less well known is $169$, in that it produces the longest chain of numbers that link back to $169$; it turns out that there are only three such loops that exist:</p>
 * \begin{align}
 * &amp;169 \to 363601 \to 1454 \to 169\\
 * &amp;871 \to 45361 \to 871\\
 * &amp;872 \to 45362 \to 872
 * \end{align}
 * <p>It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,</p>
 * \begin{align}
 * &amp;69 \to 363600 \to 1454 \to 169 \to 363601 (\to 1454)\\
 * &amp;78 \to 45360 \to 871 \to 45361 (\to 871)\\
 * &amp;540 \to 145 (\to 145)
 * \end{align}
 * <p>Starting with $69$ produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.</p>
 * <p>How many chains, with a starting number below one million, contain exactly sixty non-repeating terms?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=74'>source</a></p>
 * <p><i><b>Average runtime ~9000 ms</b></i></p>
 */
export function run(): number {
    const boundExclusive: number = 1000000;
    function nextInChain(n: number): number {
        return [...String(n)].reduce((c: number, d: string) => c + Number(factorial(Number(d))), 0);
    }
    let count: number = 0;
    for (let i: number = 1; i < boundExclusive; i++) {
        const chain: number[] = [i];
        let next: number = nextInChain(i);
        while (!chain.includes(next)) {
            chain.push(next);
            next = nextInChain(next);
        }
        if (chain.length == 60)
            count++;
    }
    return count;
}
