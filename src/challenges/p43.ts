import {generateAllNPandigitals} from "../utilities/numbers";
import {sumWithConditionBigInt} from "../utilities/sequences";

export function run(): number {
    const solution = generateAllNPandigitals(9, true)
        .map((p: number) => p.toString())
        .filter((s: string): boolean => s.length == 10)
        .filter((s: string): boolean => {
            for (let i: number = 1; i <= 7; i++) {
                if (parseInt(s.slice(i, i+3)) % [2, 3, 5, 7, 11, 13, 17][i - 1] != 0) {
                    return false;
                }
            }
            return true;
        });
    return solution.reduce((a: number, b: string): number => a + parseInt(b), 0);
}
