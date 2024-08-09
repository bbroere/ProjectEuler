import {lexicographicPermutations} from "../utilities/strings";

/**
 * <p>A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:</p>
 * <p class="center">012   021   102   120   201   210</p>
 * <p>What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=24'>source</a></p>
 * <p><i><b>Average runtime ~1400 ms</b></i></p>
 */
export function run(): number {
    return Number(lexicographicPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(String))[999999]);
}
