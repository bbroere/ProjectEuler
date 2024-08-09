import {minimalPellSolution} from "../utilities/numbers";

// Average runtime ~10 ms
export function run(): number {
    const boundInc: number = 1000;
    let currentMax: [number, bigint] = [0, 0n];
    for (let D = 2; D <= boundInc; D++) {
        // Too slow to check if D is square twice, so just assume length 0 (which is even so does not count)
        const [x, y] = minimalPellSolution(D) ?? [0n, 0n];
        if (x > currentMax[1])
            currentMax = [D, x];
    }
    return currentMax[0];
}
