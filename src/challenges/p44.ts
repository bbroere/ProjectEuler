import {generateFirstNFromFn, isPentagonal, pentagonalNumber} from "../utilities/numbers";

function findWithMax(max: number): number | undefined {
    const allPentagonals: number[] = generateFirstNFromFn(max, pentagonalNumber);
    let currentMin: number = allPentagonals.slice(-1)[0];
    let foundOne: boolean = false;
    for (let i: number = 0; i < allPentagonals.length; i++) {
        for (let j: number = i + 1; j < allPentagonals.length; j++) {
            if (
                allPentagonals.includes((allPentagonals[j] - allPentagonals[i])) &&
                isPentagonal(allPentagonals[j] + allPentagonals[i]) &&
                (allPentagonals[j] - allPentagonals[i]) < currentMin
            ) {
                foundOne = true;
                currentMin = allPentagonals[j] - allPentagonals[i];
            }
        }
    }
    return foundOne ? currentMin : undefined;
}

export function run(): number {
    let max: number = 0;
    let res: number | undefined = undefined;
    do {
        max += 1000;
        res = findWithMax(max);
    } while (!res);
    return res;
}
