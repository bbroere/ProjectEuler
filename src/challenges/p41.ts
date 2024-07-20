import {generateAllPandigitals} from "../utilities/numbers";
import {lexicographicPermutations} from "../utilities/strings";
import {properDivisors} from "../utilities/primes";

export function run(): number {
    // Not very clean, but effective
    return [
        ...lexicographicPermutations(generateAllPandigitals(9).map((t: number) => t.toString())),
        ...lexicographicPermutations(generateAllPandigitals(8).map((t: number) => t.toString())),
        ...lexicographicPermutations(generateAllPandigitals(7).map((t: number) => t.toString())),
        ...lexicographicPermutations(generateAllPandigitals(6).map((t: number) => t.toString())),
        ...lexicographicPermutations(generateAllPandigitals(5).map((t: number) => t.toString())),
        ...lexicographicPermutations(generateAllPandigitals(4).map((t: number) => t.toString())),
        ...lexicographicPermutations(generateAllPandigitals(3).map((t: number) => t.toString())),
        ...lexicographicPermutations(generateAllPandigitals(2).map((t: number) => t.toString())),
        ...lexicographicPermutations(generateAllPandigitals(1).map((t: number) => t.toString())),
    ].map((t: string) => parseInt(t)).sort((a: number, b: number) => b - a)
        // Make it a bit quicker by filtering out the ones that are divisible by 2, 3 or 5
        .filter((t: number) => t % 2 != 0 && t % 3 != 0 && t % 5 != 0)
        .find((t: number): boolean => properDivisors(t).length == 1); // finds the first
}
