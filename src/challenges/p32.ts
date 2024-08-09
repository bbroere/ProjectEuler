import {filterUnique, sum} from "../utilities/sequences";
import {isPandigital} from "../utilities/numbers";

/**
 * <p>We shall say that an $n$-digit number is pandigital if it makes use of all the digits $1$ to $n$ exactly once; for example, the $5$-digit number, $15234$, is $1$ through $5$ pandigital.</p>
 * 
 * <p>The product $7254$ is unusual, as the identity, $39 \times 186 = 7254$, containing multiplicand, multiplier, and product is $1$ through $9$ pandigital.</p>
 * 
 * <p>Find the sum of all products whose multiplicand/multiplier/product identity can be written as a $1$ through $9$ pandigital.</p>
 * 
 * <div class="note">HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.</div>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=32'>source</a></p>
 * <p><i><b>Average runtime ~105 ms</b></i></p>
 */
export function run(): number {
    // Every part must have at least one digit, so we need to loop to at most 9999999 (7 nines)
    // Also if a * b = x, a has p digits and b has q, than q has at either p+q-1 or p+q digits
    // So if a has p digits, and we want the total of digits in a, b and a*b to be 9 digits,
    // we know that b must be either have (9-2p)/2 or (8-2p)/2 digits
    // (9-2p)/2 will never be an integer, but will always be bigger than (8-2p)/2 = 4-p, so q is either 4-p or 5-p
    // This shows that there is an upper bound to p and q of 4, as neither p nor q can be 0 or smaller
    // So a and b can be at most 9999, but given the value of a, we can put further bounds on b of course
    // Optimizing for this for the value of b makes the algorithm run in 0.7s instead of 13.5s
    const res: number[] = [];
    for (let a: number = 1; a < 10000; a++) {
        const p: number = `${a}`.length;
        const minB: number = 10 ** (4 - p);
        const maxB: number = 10 ** (5 - p + 1);
        // The moment we reach that a bigger than the minimum b, we can stop
        if (minB < a) {
            return sum([...filterUnique(res)]);
        }
        for (let b: number = minB; b < maxB; b++) {
            isPandigital(`${a}${b}${a * b}`) ? res.push(a * b) : null;
        }
    }
}
