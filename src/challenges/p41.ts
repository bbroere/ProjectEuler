import {generateAllPandigitals} from "../utilities/numbers";
import {allDivisors} from "../utilities/factorization";

/**
 * <p>We shall say that an $n$-digit number is pandigital if it makes use of all the digits $1$ to $n$ exactly once. For example, $2143$ is a $4$-digit pandigital and is also prime.</p>
 * <p>What is the largest $n$-digit pandigital prime that exists?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=41'>source</a></p>
 * <p><i><b>Average runtime ~185 ms</b></i></p>
 */
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
