import {generateAllPandigitals} from "../utilities/numbers";

// Average runtime ~1550 ms
export function run(): number {
    let result: number = 0;
    generateAllPandigitals(9, true)
        .forEach((p: number): void => {
            if (Math.floor(p / 1000000000) == 0) {
                return;
            }
            for (let i: number = 0; i <= 6; i++) {
                if (Math.floor((p % 10 ** (i+3)) / (10 ** i)) % [17, 13, 11, 7, 5, 3, 2][i] != 0) {
                    return;
                }
            }
            result += p;
        });
    return result;
}
