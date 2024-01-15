import {lexicographicPermutations} from "../utils";

export function run(): number {
    return Number(lexicographicPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(String))[999999]);
}