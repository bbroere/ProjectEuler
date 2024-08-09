import {collatz} from "../utilities/numbers";

/**
 * <p>The following iterative sequence is defined for the set of positive integers:</p>
 * <ul style="list-style-type:none;">
 * <li>$n \to n/2$ ($n$ is even)</li>
 * <li>$n \to 3n + 1$ ($n$ is odd)</li></ul>
 * <p>Using the rule above and starting with $13$, we generate the following sequence:
 * $$13 \to 40 \to 20 \to 10 \to 5 \to 16 \to 8 \to 4 \to 2 \to 1.$$</p>
 * <p>It can be seen that this sequence (starting at $13$ and finishing at $1$) contains $10$ terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at $1$.</p>
 * <p>Which starting number, under one million, produces the longest chain?</p>
 * <p class="note"><b>NOTE:</b> Once the chain starts the terms are allowed to go above one million.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=14'>source</a></p>
 * <p><i><b>Average runtime ~375 ms</b></i></p>
 */
export function run(): number {
    const chainLengths: Map<number, number> = new Map<number, number>([[1,1]]);
    let max: number = 1;
    let maxIndex: number = 1;
    for (let i: number = 2; i < 1000000 || chainLengths.size < 1000000; i++) {
        let current: number = i;
        let length: number = 1;
        while (!chainLengths.has(current)) {
            current = collatz(current);
            length++;
        }
        chainLengths.set(i, length + chainLengths.get(current));
        if(chainLengths.get(i) > max) {
            max = chainLengths.get(i);
            maxIndex = i;
        }
    }
    return maxIndex;
}
