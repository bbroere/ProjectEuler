import {sum} from "../utilities/sequences";

// Average runtime ~17 ms
export function run(): number {
    const max: number = 100;
    let res: number = 0;
    for (let a: number = 1; a < max; a++) {
        for (let b: number = 1; b < max; b++) {
            const power: string = (BigInt(a) ** BigInt(b)).toString();
            res = Math.max(res, sum([...power].map((c: string) => parseInt(c))));
        }
    }
    return res;
}
