import {primesWithUpperBound} from "../utilities/primes";
import {sumWithCondition} from "../utilities/sequences";

export function run(): number {
    return sumWithCondition(primesWithUpperBound(2000000));
}