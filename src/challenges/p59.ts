import {input} from "../inputs/p59";
import {forAll, sum} from "../utilities/sequences";
import assert from "node:assert";

// Average runtime ~22 ms
export function run(): number {
    const possibleKeys: [number, number, number][] = [];
    // Simple initial filter, fist character is upper case, second and third are lower case
    // So first number <= 90 and >= 65, second and third number <= 122 and >= 97 or a space
    for (let i: number = 97; i < 123; i++) {
        for (let j: number = 97; j < 123; j++) {
            for (let k: number = 97; k < 123; k++) {
                const key: [number, number, number] = [i, j, k];
                if (forAll(
                    input,
                    (c: number, index: number): boolean =>
                        String.fromCharCode(c ^ key[index % 3]).match(/[a-zA-Z 0-9.,!?:;'"()+-[\]]/i) !== null
                )) {
                    possibleKeys.push(key);
                }
            }
        }
    }
    assert(possibleKeys.length === 1, "There should be exactly one key");
    const key: [number, number, number] = possibleKeys[0];
    return sum(input.map((n: number, i: number): number => (n ^ key[i % 3]), 0));
}
