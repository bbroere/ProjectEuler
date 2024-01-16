import {collatz} from "../utilities/numbers";

export function run(): number {
    const chainLengths: Map<number, number> = new Map<number, number>();
    for (let i: number = 1; i < 1000000; i++) {
        let current: number = i;
        let length: number = 1;
        while (current != 1 && !chainLengths.has(current)) {
            current = collatz(current);
            length++;
        }
        if (chainLengths.has(current)) {
            chainLengths.set(i, length + chainLengths.get(current));
        } else {
            chainLengths.set(i, length);
        }
    }
    return Array.from(chainLengths.entries())
        .reduce((a: [number, number], b: [number, number]): [number, number] => a[1] < b[1] ? b : a)[0];
}