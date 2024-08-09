import {findPythagoreanTriplet} from "../utilities/geometry";

/**
 * <p>A Pythagorean triplet is a set of three natural numbers, $a \lt b \lt c$, for which,
 * $$a^2 + b^2 = c^2.$$</p>
 * <p>For example, $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.</p>
 * <p>There exists exactly one Pythagorean triplet for which $a + b + c = 1000$.<br>Find the product $abc$.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=9'>source</a></p>
 * <p><i><b>Average runtime ~0.19 ms</b></i></p>
 */
export function run(): number {
    // The numbers aren't that big, so a straightforward approach should work
    for (let a: number = 1; a < 10000; a++) {
        for (let b: number = 1; b < 1000; b++) {
            const c: number = findPythagoreanTriplet(a, b);
            if (c != -1 && a + b + c == 1000) {
                return a * b * c;
            }
        }
    }
}
