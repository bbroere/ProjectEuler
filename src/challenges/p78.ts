import {partitionNumbers} from "../utilities/numbers";

/**
 * <p>Let $p(n)$ represent the number of different ways in which $n$ coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so $p(5)=7$.</p>
 * <div class="margin_left">
 * OOOOO<br>
 * OOOO   O<br>
 * OOO   OO<br>
 * OOO   O   O<br>
 * OO   OO   O<br>
 * OO   O   O   O<br>
 * O   O   O   O   O
 * </div>
 * <p>Find the least value of $n$ for which $p(n)$ is divisible by one million.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=78'>source</a></p>
 * <p><i><b>Average runtime ~950 ms</b></i></p>
 */
export function run(): number {
    const pns: bigint[] = partitionNumbers(75000);
    for (let i: number = 0; i < pns.length; i++) {
        if (pns[i] % 1_000_000n == 0n)
            return i;
    }
    return undefined;
}
