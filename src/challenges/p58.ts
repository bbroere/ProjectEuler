import {isPrime} from "../utilities/factorization";

// Average runtime 1750 ms (needs improving)
export function run(): number {
    // Ofcourse we're not going to brute force this one by generating the entire spiral
    // We can derive formulas for the 4 corners of the spiral given a certain side length
    const boundary: number = 0.1;

    let sideLength: number = 7;
    let nofFoundPrimes: number = 8;
    do {
        sideLength += 2;
        const c1: number = sideLength ** 2;
        const c2: number = c1 - (sideLength - 1);
        const c3: number = c2 - (sideLength - 1);
        const c4: number = c3 - (sideLength - 1);
        nofFoundPrimes += isPrime(c1) ? 1 : 0;
        nofFoundPrimes += isPrime(c2) ? 1 : 0;
        nofFoundPrimes += isPrime(c3) ? 1 : 0;
        nofFoundPrimes += isPrime(c4) ? 1 : 0;
    } while (nofFoundPrimes / (2 * sideLength - 1) > boundary);

    return sideLength;
}
