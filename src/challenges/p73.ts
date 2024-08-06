// Average runtime ~??? ms
import {Fraction, reduceFraction} from "../utilities/numbers";

export function run(): number {
    const foundFractions: Fraction[] = [];
    for (let d: number = 5; d <= 12000; d++) {
        for (let n: number = Math.floor(d / 3) + 1; n <= Math.ceil(d / 2) - 1; n++) {
            if ((d / n) % 1 == 0)
                continue;
            foundFractions.push(reduceFraction({numerator: BigInt(n), denominator: BigInt(d)}));
        }
    }
    const distinctFractions: Fraction[] = [];
    foundFractions.forEach((f, i) => {
        i % 100000 == 0 ? console.log(100 * i / foundFractions.length) : {};
        if(!distinctFractions.some(f2 => f2.numerator === f.numerator && f2.denominator === f.denominator))
            distinctFractions.push(f);
    });
    return distinctFractions.length;
    //7295372
    //11996000
}
