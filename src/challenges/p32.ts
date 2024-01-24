import {sumWithCondition} from "../utilities/sequences";
import {isOneNinePandigital} from "../utilities/numbers";

export function run(): number {
    // Every part must have at least one digit, so we need to loop to at most 9999999 (7 nines)
    // Also if a * b = x, a has p digits and b has q, than q has at either p+q-1 or p+q digits
    // So if a has p digits, and we want the total of digits in a, b and a*b to be 9 digits,
    // we know that b must be either have (9-2p)/2 or (8-2p)/2 digits
    // (9-2p)/2 will never be an integer, but will always be bigger than (8-2p)/2 = 4-p, so q is either 4-p or 5-p
    // This shows that there is an upper bound to p and q of 4, as neither p nor q can be 0 or smaller
    // So a and b can be at most 9999, but given the value of a, we can put further bounds on b of course
    // Optimizing for this for the value of b makes the algorithm run in 0.7s instead of 13.5s
    const res: Set<number> = new Set<number>();
    for (let a: number = 1; a < 10000; a++) {
        const p: number = `${a}`.length;
        const minB: number = Math.pow(10, 4 - p);
        const maxB: number = Math.pow(10, 5 - p + 1);
        for (let b: number = minB; b < maxB; b++) {
            if (isOneNinePandigital(`${a}${b}${a * b}`)) {
                res.add(a * b);
            }
        }
    }
    return sumWithCondition([...res.values()]);
}
