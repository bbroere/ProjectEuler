import {filterListUnique, sumOfFactors} from "../utils";

export function run(): number {
    const dMap: Map<number, number> = new Map<number, number>();
    const amics: number[] = [];
    for (let i = 2; i < 10000; i++) {
        if (!dMap.has(i)) {
            dMap.set(i, sumOfFactors(i));
        }
        if (!dMap.has(dMap.get(i))) {
            dMap.set(dMap.get(i), sumOfFactors(dMap.get(i)));
        }
        if (dMap.get(dMap.get(i)) == i && dMap.get(i) != i) {
            amics.push(i, dMap.get(i));
        }
    }
    return filterListUnique(amics).reduce((c, n) => c + n, 0);
}