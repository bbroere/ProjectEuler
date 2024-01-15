import {lcm} from "../utils";

export function run(): number {
    // This is simply the lcm of all numbers
    let res: number = 1;
    for (let i = 2; i < 21; i++) {
        res = lcm(res, i);
    }
    return res;
}