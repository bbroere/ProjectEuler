import {nofFactors} from "../utils";

export function run(): number {
    let index: number = 1;
    let latest: number = index;
    while (nofFactors(latest) <= 500) {
        index++;
        latest += index;
    }
    return latest;
}