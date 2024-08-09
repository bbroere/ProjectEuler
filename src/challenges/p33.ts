import assert from "node:assert";
import {gcd} from "../utilities/numbers";

/**
 * <p>The fraction $49/98$ is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that $49/98 = 4/8$, which is correct, is obtained by cancelling the $9$s.</p>
 * <p>We shall consider fractions like, $30/50 = 3/5$, to be trivial examples.</p>
 * <p>There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.</p>
 * <p>If the product of these four fractions is given in its lowest common terms, find the value of the denominator.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=33'>source</a></p>
 * <p><i><b>Average runtime ~0.4 ms</b></i></p>
 */
export function run(): number {
    const partLength: number = 2;
    const matches: [number, number][] = [];
    for (let n: number = 10 ** (partLength - 1); n < 10 ** partLength - 1; n++)
        for (let d: number = n + 1; d < 10 ** partLength; d++)
            if (!`${n}${d}`.includes("0") && isTrivial(n, d))
                matches.push([n, d]);
    assert(matches.length == 4);
    const pN: number = matches.reduce((c: number, n: [number, number]) => c * n[0], 1);
    const pD: number = matches.reduce((c: number, n: [number, number]) => c * n[1], 1);
    const GCD: number = gcd(pN, pD);
    return pD / GCD;
}

function isTrivial(n: number, d: number): boolean {
    const ns: string[] = String(n).split("");
    const ds: string[] = String(d).split("");
    const overlap: string[] = ns.filter((t: string) => ds.includes(t));
    let isTrivial: boolean = false;
    overlap.forEach((o: string): void => {
        const newN: string = String(n).replaceAll(o, "");
        const newD: string = String(d).replaceAll(o, "");
        if (Number(newN) / Number(newD) == n / d) {
            isTrivial = true;
        }
    });
    return isTrivial;
}
