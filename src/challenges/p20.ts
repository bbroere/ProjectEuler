import {factorial} from "../utilities/numbers";

export function run(): number {
    return factorial(100)
        .toString()
        .split("")
        .map(Number)
        .reduce((c: number, n: number) => c + n, 0);
}