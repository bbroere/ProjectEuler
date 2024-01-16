import {fibonacciFirstWithCondition} from "../utilities/fibonacci";

export function run(): number {
    return fibonacciFirstWithCondition((i: number, f: bigint): boolean => `${f}`.length >= 1000)[0];
}