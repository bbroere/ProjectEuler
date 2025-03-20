import {numbersWithMaxSize} from "../utilities/sequences";

/**
 * <p>A natural number, $N$, that can be written as the sum and product of a given set of at least two natural numbers, $\{a_1, a_2, \dots, a_k\}$ is called a product-sum number: $N = a_1 + a_2 + \cdots + a_k = a_1 \times a_2 \times \cdots \times a_k$.</p>
 * <p>For example, $6 = 1 + 2 + 3 = 1 \times 2 \times 3$.</p>
 * <p>For a given set of size, $k$, we shall call the smallest $N$ with this property a minimal product-sum number. The minimal product-sum numbers for sets of size, $k = 2, 3, 4, 5$, and $6$ are as follows.</p>
 * <ul style="list-style-type:none;">
 * <li>$k=2$: $4 = 2 \times 2 = 2 + 2$</li>
 * <li>$k=3$: $6 = 1 \times 2 \times 3 = 1 + 2 + 3$</li>
 * <li>$k=4$: $8 = 1 \times 1 \times 2 \times 4 = 1 + 1 + 2 + 4$</li>
 * <li>$k=5$: $8 = 1 \times 1 \times 2 \times 2 \times 2 = 1 + 1 + 2 + 2 + 2$</li><li>$k=6$: $12 = 1 \times 1 \times 1 \times 1 \times 2 \times 6 = 1 + 1 + 1 + 1 + 2 + 6$</li></ul>
 * <p>Hence for $2 \le k \le 6$, the sum of all the minimal product-sum numbers is $4+6+8+12 = 30$; note that $8$ is only counted once in the sum.</p>
 * <p>In fact, as the complete set of minimal product-sum numbers for $2 \le k \le 12$ is $\{4, 6, 8, 12, 15, 16\}$, the sum is $61$.</p>
 * <p>What is the sum of all the minimal product-sum numbers for $2 \le k \le 12000$?</p>
 *
 * <p>Generated on 2024-08-16 from <a href='https://projecteuler.net/problem=88'>source</a></p>
 * <p><i><b>Average runtime ~??? ms</b></i></p>
 */
export function run(): number {
    // We observe that 1x1x...x1xk = k < 1+1+...+1+k, so we have (if k>1) at least 2 non-1 terms
    // Also for all k we know that for the minimum value M_k holds: k < M_k <= 1x1x...x1x2xk = (k-2) + 2 + k = 2k
    // So k < M_k <= 2k, and we know that each term will be at most k
    // We can also see that we will have at most log_2(2*k) terms that are not 1, as 2^(log_2(2*k)) = 2*k which is the max for M_k
    const limitInc: number = 12000;

    // for (let k = 2; k < limitInc; k++) {
    //     const currentMinValue: number = 2 * k;
    //     const currentSeries: number[] = numbersWithMaxSize(k).fill(1);
    //     currentSeries[0] = 2;
    //     currentSeries[1] = 2;
    //     for (let i = 0; i < Math.log2(k); i++) {
    //         for (let j = 0; j < k; j++) {
    //
    //         }
    //     }
    // }
    determineListOfSizeWithMax(Math.floor(Math.log2(2 * 12000)), 12000);

    return undefined;
}

function determineSetForK(k: number): number[][] {
    const t = Math.floor(Math.log2(k));
    const tOnesList: number[] = numbersWithMaxSize(t).fill(1);

    return [];
}

function determineListOfSizeWithMax(size: number, max: number): number[][] {
    console.log(size);
    if (size == 1)
        return numbersWithMaxSize(max).map(t => [t]);
    console.log(size);
    const listLengthMinusOne = determineListOfSizeWithMax(size - 1, max)
        .filter(l => {
            let ss = 0;
            let pp = 1;
            let i = 0;
            while (ss < 2 * max && pp < 2 * max && i < l.length) {
                ss += l[i];
                pp *= l[i];
                i++;
            }
            return ss < 2 * max && pp < 2 * max;
        });
    console.log(size, listLengthMinusOne.length);
    return /*filterUnique(*/numbersWithMaxSize(max).flatMap(t => listLengthMinusOne.map(l => [t, ...l].sort()));//, (lhs, rhs) => lhs.reduce((c, n, i) => c && n == rhs[i], true));
}
