import {numberOfDivisors} from "../utilities/factorization";

// Average runtime ~45 ms
export function run(): number {
    let index: number = 0;
    let latest: number = 0;
    do {
        index++;
        latest += index;
    } while (numberOfDivisors(latest) <= 500);
    return latest;
}
