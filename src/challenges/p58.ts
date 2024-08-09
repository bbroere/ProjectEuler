import {isPrime} from "../utilities/factorization";

/**
 * <p>Starting with $1$ and spiralling anticlockwise in the following way, a square spiral with side length $7$ is formed.</p>
 * <p class="center monospace"><span class="red"><b>37</b></span> 36 35 34 33 32 <span class="red"><b>31</b></span><br>
 * 38 <span class="red"><b>17</b></span> 16 15 14 <span class="red"><b>13</b></span> 30<br>
 * 39 18 <span class="red"> <b>5</b></span>  4 <span class="red"> <b>3</b></span> 12 29<br>
 * 40 19  6  1  2 11 28<br>
 * 41 20 <span class="red"> <b>7</b></span>  8  9 10 27<br>
 * 42 21 22 23 24 25 26<br><span class="red"><b>43</b></span> 44 45 46 47 48 49</p>
 * <p>It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that $8$ out of the $13$ numbers lying along both diagonals are prime; that is, a ratio of $8/13 \approx 62\%$.</p>
 * <p>If one complete new layer is wrapped around the spiral above, a square spiral with side length $9$ will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below $10\%$?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=58'>source</a></p>
 * <p><i><b>Average runtime ~1750 ms</b></i></p>
 */
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
