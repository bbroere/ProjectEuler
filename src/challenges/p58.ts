import {isPrime} from "../utilities/primes";

export function run(): number {
    // Ofcourse we're not going to brute force this one by generating the entire spiral
    // We can derive formulas for the 4 corners of the spiral given a certain side length
    const boundary: number = 0.1;

    let sideLength: number = 7;
    let nofFoundPrimes: number = 8;
    do {
        sideLength += 2;
        const newCorners: number[] = Array.from({length: 4}, (_, i: number) => sideLength ** 2 - (i) * (sideLength - 1));
        nofFoundPrimes += newCorners.filter((c: number) => isPrime(c)).length;
    } while (nofFoundPrimes / (2 * sideLength - 1) > boundary);

    return sideLength;
}
