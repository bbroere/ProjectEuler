import {isPalindrome} from "../utilities/strings";

/**
 * <p>The decimal number, $585 = 1001001001_2$ (binary), is palindromic in both bases.</p>
 * <p>Find the sum of all numbers, less than one million, which are palindromic in base $10$ and base $2$.</p>
 * <p class="smaller">(Please note that the palindromic number, in either base, may not include leading zeros.)</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=36'>source</a></p>
 * <p><i><b>Average runtime ~110 ms</b></i></p>
 */
export function run(): number {
    const upperboundEx: number = 1000000;
    let res: number = 0;
    for (let p: number = 0; p < upperboundEx; p++) {
        if (isPalindrome(p) && isPalindrome(p.toString(2))) {
            res += p;
        }
    }
    return res;
}
