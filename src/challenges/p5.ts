import {lcm} from "../utilities/numbers";

export function run(): number {
    // This is simply the lcm of all numbers
    return lcm(...[...Array(20).keys()].map((t: number) => t + 1));
}