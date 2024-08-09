/**
 * <p>The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form $2^{6972593} - 1$; it contains exactly $2\,098\,960$ digits. Subsequently other Mersenne primes, of the form $2^p - 1$, have been found which contain more digits.</p>
 * <p>However, in 2004 there was found a massive non-Mersenne prime which contains $2\,357\,207$ digits: $28433 \times 2^{7830457} + 1$.</p>
 * <p>Find the last ten digits of this prime number.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=97'>source</a></p>
 * <p><i><b>Average runtime ~400 ms</b></i></p>
 */
export function run(): number {
    return Number(String(28433n * 2n ** 7830457n + 1n).slice(-10));
}
