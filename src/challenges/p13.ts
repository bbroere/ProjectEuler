import {input} from "../inputs/p13";

export function run(): number {
    // Typescript cna do this just fine
    const numbers: number[] = input.split("\n").map(Number);
    return Number(BigInt(numbers.reduce((c, n) => c + n, 0)).toString().slice(0, 10));
}