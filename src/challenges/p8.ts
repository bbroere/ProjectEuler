import {input} from "../inputs/p8";

// Average runtime ~0.18 ms
export function run(): number {
    const inputList: number[] = input.split("").map(Number);
    let max: number = 0;
    while (inputList.length > 0) {
        const current: number = inputList.slice(0, 13).reduce((c: number, n: number) => c * n, 1);
        max = Math.max(current, max);
        inputList.shift();
    }
    return max;
}
