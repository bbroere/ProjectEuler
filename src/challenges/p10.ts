import {primesWithUpperBound} from "../utilities/factorization";
import {sum} from "../utilities/sequences";

// Average runtime ~58 ms
export function run(): number {
    return sum(primesWithUpperBound(2000000));
}
