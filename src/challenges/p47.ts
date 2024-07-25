import {factorize} from "../utilities/primes";

export function run(): number {
    const min: number = 125000;
    const prevFactors: Map<number, number> = new Map<number, number>([
        [min, factorize(min).size],
        [min + 1, factorize(min + 1).size],
        [min + 2, factorize(min + 2).size],
        [min + 3, factorize(min + 3).size],
    ]);
    let i: number = min + 3;
    do {
        i++;
        prevFactors.set(i, factorize(i).size);
    } while (![...prevFactors.values()].slice(-4).every((v: number): boolean => v == 4));
    return i - 3;
}
