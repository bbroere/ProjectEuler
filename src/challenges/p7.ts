import {checkPrime} from "../utils";

export function run(): number {
    let latestPrime: number = 2;
    let latestPrimeCnt: number = 1;
    for (let i: number = 3; latestPrimeCnt != 10001; i += 2) {
        if (checkPrime(i)) {
            latestPrime = i;
            latestPrimeCnt += 1;
        }
    }
    return latestPrime;
}