import {input} from "../inputs/p8";

export function run(): number {
    const inputList: number[] = input.split("").map(Number);
    let max: number = 0;
    while (inputList.length > 0) {
        const current: number = inputList.slice(0, 13).reduce((c, n) => c * n, 1);
        if (current > max) {
            max = current;
        }
        inputList.shift();
    }
    return max;
}