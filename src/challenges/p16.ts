import {sum} from "../utilities/sequences";

// Average runtime ~0.007 ms
export function run(): number {
    return sum((2n ** 1000n)
        .toString()
        .split("")
        .map(Number));
}
