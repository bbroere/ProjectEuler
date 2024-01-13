import {nofFactors} from "../utils";

export function run(): void {
    let index: number = 1;
    let latest: number = index;
    while (nofFactors(latest) <= 500) {
        index++;
        latest += index;
    }
    console.log(latest);
}