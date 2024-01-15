import {fibonacciWithCondition} from "../utils";

export function run(): number {
    return fibonacciWithCondition((f: bigint) => `${f}`.length >= 1000)[0];
}