import {factorize} from "../utilities/primes";

export function run(): number {
    return Math.max(...factorize(600851475143).keys());
}