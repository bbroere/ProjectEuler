import assert from "node:assert";
import {gcd} from "../utilities/numbers";

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
