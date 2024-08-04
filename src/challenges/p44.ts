import {isSPolygonal, polygonalNumber} from "../utilities/numbers";
import {generateFirstN} from "../utilities/sequences";

// Average runtime ~150 ms
export function run(): number {
    let max: number = 0;
    let res: number | undefined = undefined;
    do {
        max += 1000;
        res = findWithMax(max);
    } while (!res);
    return res;
}

function findWithMax(max: number): number | undefined {
    const allPentagonals: number[] = generateFirstN(max, polygonalNumber(5));
    let currentMin: number = allPentagonals.slice(-1)[0];
    let foundOne: boolean = false;
    for (let i: number = 0; i < allPentagonals.length; i++) {
        for (let j: number = i + 1; j < allPentagonals.length; j++) {
            if (
                isSPolygonal(5, (allPentagonals[j] - allPentagonals[i])) &&
                isSPolygonal(5, allPentagonals[j] + allPentagonals[i]) &&
                (allPentagonals[j] - allPentagonals[i]) < currentMin
            ) {
                foundOne = true;
                currentMin = allPentagonals[j] - allPentagonals[i];
            }
        }
    }
    return foundOne ? currentMin : undefined;
}
