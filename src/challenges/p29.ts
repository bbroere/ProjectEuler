import {filterUnique} from "../utilities/sequences";

// Average runtime ~36 ms
export function run(): number {
    const upperbound: number = 100;
    const res: number[] = [];
    for (let a: number = 2; a <= upperbound; a++) {
        for (let b: number = 2; b <= upperbound; b++) {
            res.push(Math.pow(a, b));
        }
    }
    return filterUnique(res).length;
}
