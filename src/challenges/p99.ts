import {input} from "../inputs/99";

/**
 * <p>Comparing two numbers written in index form like $2^{11}$ and $3^7$ is not difficult, as any calculator would confirm that $2^{11} = 2048 \lt 3^7 = 2187$.</p>
 * <p>However, confirming that $632382^{518061} \gt 519432^{525806}$ would be much more difficult, as both numbers contain over three million digits.</p>
 * <p>Using <a href="https://projecteuler.net/resources/documents/0099_base_exp.txt">base_exp.txt</a> (right click and 'Save Link/Target As...'), a 22K text file containing one thousand lines with a base/exponent pair on each line, determine which line number has the greatest numerical value.</p>
 * <p class="smaller">NOTE: The first two lines in the file represent the numbers in the example given above.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=99'>source</a></p>
 * <p><i><b>Average runtime ~??? ms</b></i></p>
 */
export function run(): number {
    // if 10^(n-1) <= a^b < 10^n, then n = 1 + floor(log10(a^b)), or n = 1 + floor(b * log10(a))
    const mappedInput: [number, number[]] = input.reduce((currentMaxIndices: [number, number[]], [a, b]: [number, number], currentIndex: number): [number, number[]] => {
        const current = Math.floor(b * Math.log10(a));
        if (current > currentMaxIndices[0]) {
            return [current, [currentIndex]];
        } else if (current === currentMaxIndices[0]) {
            currentMaxIndices[1].push(currentIndex);
        }
        return currentMaxIndices;
    }, [-1, []]);
    return mappedInput[1].reduce((currentMax: [number, bigint], inputIndex: number): [number, bigint] => {
        const [a, b]: [number, number] = input[inputIndex];
        const current = BigInt(a) ** BigInt(b);
        if (current > currentMax[1]) {
            return [inputIndex, current];
        }
        return currentMax;
    }, [-1, 0n])[0] as number + 1;
}
