import {filterUnique, forAll, numbersWithMaxSize} from "../utilities/sequences";
import {input} from "../inputs/p79";
import assert from "node:assert";

/**
 * <p>A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.</p>
 * <p>The text file, <a href="https://projecteuler.net/resources/documents/0079_keylog.txt">keylog.txt</a>, contains fifty successful login attempts.</p>
 * <p>Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=79'>source</a></p>
 * <p><i><b>Average runtime ~0.04 ms</b></i></p>
 */
export function run(): number {
    const allChars: string[] = filterUnique(input.flatMap((s: string) => s.split("")));
    // Assumption: no double characters in the input
    assert(forAll(input, (s: string): boolean => s.length === filterUnique(s.split("")).length), "Input contains double characters");

    const result: string[] = numbersWithMaxSize(allChars.length).map((t: number): string => "");
    for (let k: number = 0; k < allChars.length; k++) {
        const containingKeys: string[] = input.filter((s: string) => s.includes(allChars[k]));
        const finalIndex: number = filterUnique(containingKeys.flatMap(s => s.slice(0, s.indexOf(allChars[k])).split(""))).length;
        result[finalIndex] = allChars[k];
    }
    return Number(result.join(""));
}
