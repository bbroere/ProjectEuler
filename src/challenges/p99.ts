import {input} from "../inputs/99";

// Average runtime ~150 ms
export function run(): number {
    // if 10^(n-1) <= a^b < 10^n, then n = 1 + floor(log10(a^b)), or n = 1 + floor(b * log10(a))
    const mappedInput: [number, number[]] = input.reduce((currentMaxIndices: [number, number[]], [a, b]: [number, number], currentIndex: number): [number, number[]] => {
        const current = Math.floor(b * Math.log10(a));
        if (current > currentMaxIndices[0]) {
            return [current, [currentIndex]];
        } else if (current === currentMaxIndices[0]) {
            currentMaxIndices[1].push(currentIndex);
        }
        return currentMaxIndices;
    }, [-1, []]);
    return mappedInput[1].reduce((currentMax: [number, bigint], inputIndex: number): [number, bigint] => {
        const [a, b]: [number, number] = input[inputIndex];
        const current = BigInt(a) ** BigInt(b);
        if (current > currentMax[1]) {
            return [inputIndex, current];
        }
        return currentMax;
    }, [-1, 0n])[0] as number + 1;
}
