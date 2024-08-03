import {generateAllPandigitals} from "../utilities/numbers";
import {allDivisors} from "../utilities/factorization";

// Average runtime ~185 ms
export function run(): number {
    // Not very clean, but effective
    return [
        ...generateAllPandigitals(9),
        ...generateAllPandigitals(8),
        ...generateAllPandigitals(7),
        ...generateAllPandigitals(6),
        ...generateAllPandigitals(5),
        ...generateAllPandigitals(4),
        ...generateAllPandigitals(3),
        ...generateAllPandigitals(2),
        ...generateAllPandigitals(1),
    ].sort((a: number, b: number) => b - a)
        // Make it a bit quicker by filtering out the ones that are divisible by 2, 3 or 5
        .filter((t: number) => t % 2 != 0 && t % 3 != 0 && t % 5 != 0)
        .find((t: number): boolean => allDivisors(t).length == 2); // finds the first
}
