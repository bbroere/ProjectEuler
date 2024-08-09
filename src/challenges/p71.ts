import {Fraction, gcd} from "../utilities/numbers";

// Average runtime ~75 ms
export function run(): bigint {
    let currentMax: Fraction = {numerator: 0n, denominator: 1n};
    const border: number = 1000000;
    for (let d: bigint = 1n; d <= border; d++) {
        if (d % 7n === 0n) // otherwise we find 3/7
            continue;
        const n: bigint = d * 3n / 7n;
        if (gcd(n, d) === 1n && n * currentMax.denominator > currentMax.numerator * d)
            currentMax = {numerator: BigInt(n), denominator: BigInt(d)};
    }
    return currentMax.numerator;
}
