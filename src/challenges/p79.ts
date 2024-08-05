import {input} from "../inputs/p79";
import {filterUnique, forAll, numbersWithMaxSize} from "../utilities/sequences";
import assert from "node:assert";

// Average runtime ~0.04 ms
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
