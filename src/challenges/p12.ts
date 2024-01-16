import {numberOfDivisors} from "../utilities/primes";

export function run(): number {
    let index: number = 1;
    let latest: number = index;
    while (numberOfDivisors(latest) <= 500) {
        index++;
        latest += index;
    }
    return latest;
}