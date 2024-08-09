import {arePermutations} from "../utilities/strings";

/**
 * <p>The cube, $41063625$ ($345^3$), can be permuted to produce two other cubes: $56623104$ ($384^3$) and $66430125$ ($405^3$). In fact, $41063625$ is the smallest cube which has exactly three permutations of its digits which are also cube.</p>
 * <p>Find the smallest cube for which exactly five permutations of its digits are cube.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=62'>source</a></p>
 * <p><i><b>Average runtime ~32000 ms</b></i></p>
 */
export function run(): number {
    const start: number = 346;
    const cubes: number[] = [];
    for (let i: number = start; ; i++) {
        cubes.push(i ** 3);
        const permutatedCubes: number[] = cubes.filter((c: number) => arePermutations(`${c}`, `${cubes[cubes.length - 1]}`));
        if (permutatedCubes.length === 5) {
            return Math.min(...permutatedCubes);
        }
    }
}
