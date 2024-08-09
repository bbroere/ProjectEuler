import {sum} from "../utilities/sequences";
import {eulerPhiList} from "../utilities/numbers";

// Average runtime ~60 ms
export function run(): number {
    // This is equivalent to the sum of all proper divisors of all numbers upto 1_000_000, excluding 0 and 1
    return sum(eulerPhiList(1_000_000).slice(2));
}
