import {primesWithUpperBound} from "../utilities/factorization";

/**
 * <p>The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is $28$. In fact, there are exactly four numbers below fifty that can be expressed in such a way:</p>
 * \begin{align}
 * 28 &amp;= 2^2 + 2^3 + 2^4\\
 * 33 &amp;= 3^2 + 2^3 + 2^4\\
 * 49 &amp;= 5^2 + 2^3 + 2^4\\
 * 47 &amp;= 2^2 + 3^3 + 2^4
 * \end{align}
 * <p>How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?</p>
 *
 * <p>Generated on 2024-08-16 from <a href='https://projecteuler.net/problem=87'>source</a></p>
 * <p><i><b>Average runtime ~75 ms</b></i></p>
 */
export function run(): number {
    const limitExc: number = 50_000_000;

    const maxSq: number = Math.sqrt(limitExc);
    const maxCu: number = Math.cbrt(limitExc);
    const maxFo: number = Math.sqrt(maxSq);
    const primes: number[] = primesWithUpperBound(maxSq);
    const squares: number[] = [];
    const cubes: number[] = [];
    const fourths: number[] = [];
    const allNumbers: Set<number> = new Set<number>();

    for (let i = 0; i < primes.length; i++) {
        const prime: number = primes[i];
        squares.push(prime ** 2);
        if (prime <= maxCu) {
            cubes.push(prime ** 3);
            if (prime <= maxFo)
                fourths.push(prime ** 4);
        }
    }
    for (let i = 0; i < squares.length; i++) {
        const square: number = squares[i];
        for (let j = 0; j < cubes.length; j++) {
            const cube: number = cubes[j];
            for (let k = 0; k < fourths.length && square + cube < limitExc; k++) {
                const summation = square + cube + fourths[k];
                if (summation < limitExc)
                    allNumbers.add(summation);
                else
                    break;
            }
        }
    }

    return allNumbers.size;
}
