import {sumWithCondition} from "../utilities/sequences";

export function run(): number {
    const max: number = 100;
    let res: number = 0;
    for (let a: number = 1; a < max; a++) {
        for (let b: number = 1; b < max; b++) {
            const power: string = (BigInt(a) ** BigInt(b)).toString();
            const sum: number = sumWithCondition([...power].map((c: string) => parseInt(c)));
            if (sum > res) {
                res = sum;
            }
        }
    }
    return res;
}
