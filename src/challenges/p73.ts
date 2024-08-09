import {gcd} from "../utilities/numbers";

// Average runtime ~800 ms
export function run(): number {
    const upperBoundInc: number = 12_000;
    let result: number = 0;
    // We can skip d=1 (only has 1/1), d=2 (only has 1/2, which is a bound) and d=3 (only has 1/3, which is a bound)
    for (let d = 4; d <= upperBoundInc; d++) {
        const leftBound: number = Math.ceil(d / 3);
        const rightBound: number = Math.floor(d / 2);
        let currentSum = 0;
        for (let n = leftBound; n <= rightBound; n++)
            if (gcd(n, d) === 1)
                currentSum++;
        result += currentSum;
    }
    return result;
}
