import {primesWithUpperBound} from "../utilities/factorization";
import {sumWithCondition} from "../utilities/sequences";

export function run(): number {
    return sumWithCondition(primesWithUpperBound(2000000));
}
