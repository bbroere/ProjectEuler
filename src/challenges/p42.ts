import {input} from "../inputs/p42";
import {alphabeticalValue} from "../utilities/strings";
import {generateFirstN} from "../utilities/sequences";
import {polygonalNumber} from "../utilities/numbers";

/**
 * <p>The $n$<sup>th</sup> term of the sequence of triangle numbers is given by, $t_n = \frac12n(n+1)$; so the first ten triangle numbers are:
 * $$1, 3, 6, 10, 15, 21, 28, 36, 45, 55, \dots$$</p>
 * <p>By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is $19 + 11 + 25 = 55 = t_{10}$. If the word value is a triangle number then we shall call the word a triangle word.</p>
 * <p>Using <a href="https://projecteuler.net/resources/documents/0042_words.txt">words.txt</a> (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=42'>source</a></p>
 * <p><i><b>Average runtime ~0.32 ms</b></i></p>
 */
export function run(): number {
    const allAlphabeticalValues: number[] = input.map(alphabeticalValue).sort((a: number, b: number) => a - b);
    const neededTriangleNumbers: number[] = generateFirstN(allAlphabeticalValues[allAlphabeticalValues.length - 1], polygonalNumber(3));
    return allAlphabeticalValues.filter((n: number) => neededTriangleNumbers.includes(n)).length;
}
