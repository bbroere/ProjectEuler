import {continuedFractionExpansion, Fraction} from "../utilities/numbers";

// Average runtime ~42 ms
export function run(): number {
    const nofExpansions: number = 1000;
    let res: number = 0;
    for (let i: number = 0; i < nofExpansions; i++) {
        const f: Fraction = continuedFractionExpansion(i, {base: 1, expansion: [2]});
        if (f.numerator.toString().length > f.denominator.toString().length) {
            res++;
        }
    }
    return res;
}
