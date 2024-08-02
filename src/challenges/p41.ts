import {generateAllNPandigitals} from "../utilities/numbers";
import {allDivisors} from "../utilities/factorization";

export function run(): number {
    // Not very clean, but effective
    return [
        ...generateAllNPandigitals(9),
        ...generateAllNPandigitals(8),
        ...generateAllNPandigitals(7),
        ...generateAllNPandigitals(6),
        ...generateAllNPandigitals(5),
        ...generateAllNPandigitals(4),
        ...generateAllNPandigitals(3),
        ...generateAllNPandigitals(2),
        ...generateAllNPandigitals(1),
    ].sort((a: number, b: number) => b - a)
        // Make it a bit quicker by filtering out the ones that are divisible by 2, 3 or 5
        .filter((t: number) => t % 2 != 0 && t % 3 != 0 && t % 5 != 0)
        .find((t: number): boolean => allDivisors(t).length == 2); // finds the first
}
