import {Fraction, sqrt2Expansion} from "../utilities/numbers";

// Average runtime ~42 ms
export function run(): number {
    const nofExpansions: number = 1000;
    let res: number = 0;
    for (let i: number = 0; i < nofExpansions; i++) {
        const f: Fraction = sqrt2Expansion(i);
        if (f.numerator.toString().length > f.denominator.toString().length) {
            res++;
        }
    }
    return res;
}
