import {sumWithConditionBigInt} from "../utilities/sequences";
import {fibonacciListWithUpperBound} from "../utilities/fibonacci";

export function run(): bigint {
    return sumWithConditionBigInt(
        fibonacciListWithUpperBound(4000000n).map((t: [number, bigint]) => t[1]),
        (n: bigint): boolean => n % 2n == 0n
    );
}