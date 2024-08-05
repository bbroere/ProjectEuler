import {Fraction, reduceFraction} from "../utilities/numbers";

// Average runtime ~400 ms (needs improvement)
export function run(): bigint {
    const fractions: Fraction[] = [];
    const border: number = 1000000;
    for (let d: number = 1; d < border + 1; d++) {
        if (d % 7 === 0)
            continue;
        fractions.push({numerator: BigInt(Math.floor(d * 3 / 7)), denominator: BigInt(d)});
    }
    return reduceFraction(fractions.sort((a: Fraction, b: Fraction): number => Number(b.numerator) / Number(b.denominator) < Number(a.numerator) / Number(a.denominator) ? -1 : 1)[0]).numerator;
}
