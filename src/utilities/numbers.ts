import assert from "node:assert";

/**
 * Calculates LCM of a list of arguments
 */
export function lcm(...args: number[]): number {
    assert(args.length > 1);
    let a: number = args[0];
    for (let i = 1; i < args.length; i++) {
        let a_r: number = a;
        let b_r: number = args[i];
        while (a_r != b_r) {
            if (a_r < b_r) {
                a_r += a;
            } else {
                b_r += args[i];
            }
        }
        a = a_r;
    }
    return a;
}
