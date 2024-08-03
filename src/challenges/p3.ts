import {factorize} from "../utilities/factorization";

// Average runtime ~0.03 ms
export function run(): number {
    return Math.max(...factorize(600851475143).keys());
}
