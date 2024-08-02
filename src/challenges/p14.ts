import {collatz} from "../utilities/numbers";

// Average runtime ~375 ms
export function run(): number {
    const chainLengths: Map<number, number> = new Map<number, number>([[1,1]]);
    let max: number = 1;
    let maxIndex: number = 1;
    for (let i: number = 2; i < 1000000 || chainLengths.size < 1000000; i++) {
        let current: number = i;
        let length: number = 1;
        while (!chainLengths.has(current)) {
            current = collatz(current);
            length++;
        }
        chainLengths.set(i, length + chainLengths.get(current));
        if(chainLengths.get(i) > max) {
            max = chainLengths.get(i);
            maxIndex = i;
        }
    }
    return maxIndex;
}
