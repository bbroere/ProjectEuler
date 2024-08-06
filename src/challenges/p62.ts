import {arePermutations} from "../utilities/strings";

// Average runtime ~32000 ms (needs optimization)
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
