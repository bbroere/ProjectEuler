import {numbersWithMaxSize, sum} from "../utilities/sequences";
import {bigintSqrt} from "../utilities/numbers";

// Average runtime ~6.5 ms
export function run(): number {
    const max: number = 100;
    const allNumbers: number[] = [0, ...numbersWithMaxSize(max)];
    for (let i: number = 1; i <= Math.sqrt(max); i++)
        allNumbers[i ** 2] = 0;
    let s: number = 0;
    for (let i: number = 0; i <= max; i++) {
        s += sum(bigintSqrt(100n ** 99n * BigInt(allNumbers[i])).toString().split("").map(Number));
    }
    return s;
}
