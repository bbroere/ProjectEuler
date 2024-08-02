import {factorial} from "../utilities/numbers";
import {sum} from "../utilities/sequences";

// Average runtime ~0.006 ms
export function run(): number {
    return sum(factorial(100)
        .toString()
        .split("")
        .map(Number));
}
