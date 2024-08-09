import {continuedFractionExpansion, Fraction} from "../utilities/numbers";

/**
 * <p>It is possible to show that the square root of two can be expressed as an infinite continued fraction.</p>
 * <p class="center">$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</p>
 * <p>By expanding this for the first four iterations, we get:</p>
 * <p>$1 + \frac 1 2 = \frac  32 = 1.5$<br>
 * $1 + \frac 1 {2 + \frac 1 2} = \frac 7 5 = 1.4$<br>
 * $1 + \frac 1 {2 + \frac 1 {2+\frac 1 2}} = \frac {17}{12} = 1.41666 \dots$<br>
 * $1 + \frac 1 {2 + \frac 1 {2+\frac 1 {2+\frac 1 2}}} = \frac {41}{29} = 1.41379 \dots$<br></p>
 * <p>The next three expansions are $\frac {99}{70}$, $\frac {239}{169}$, and $\frac {577}{408}$, but the eighth expansion, $\frac {1393}{985}$, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.</p>
 * <p>In the first one-thousand expansions, how many fractions contain a numerator with more digits than the denominator?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=57'>source</a></p>
 * <p><i><b>Average runtime ~42 ms</b></i></p>
 */
export function run(): number {
    const nofExpansions: number = 1000;
    let res: number = 0;
    for (let i: number = 0; i < nofExpansions; i++) {
        const f: Fraction = continuedFractionExpansion(i, {base: 1, expansion: [2]});
        if (f.numerator.toString().length > f.denominator.toString().length)
            res++;
    }
    return res;
}
