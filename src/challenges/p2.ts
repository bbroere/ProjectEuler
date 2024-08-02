import {sum} from "../utilities/sequences";
import {fibList} from "../utilities/fibonacci";

// Average runtime ~0.02 ms
export function run(): bigint {
    return sum(fibList(4000000), (n: bigint): boolean => n % 2n == 0n);
}
