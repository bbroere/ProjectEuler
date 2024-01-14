import {fibonacciWithCondition} from "../utils";

export function run(): void {
    console.log(fibonacciWithCondition((f: bigint) => `${f}`.length >= 1000)[0]);
}