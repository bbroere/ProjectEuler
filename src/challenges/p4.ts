import {isPalindrome} from "../utilities/strings";

/**
 * <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two $2$-digit numbers is $9009 = 91 \times 99$.</p>
 * <p>Find the largest palindrome made from the product of two $3$-digit numbers.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=4'>source</a></p>
 * <p><i><b>Average runtime ~45 ms</b></i></p>
 */
export function run(): number {
    // Not the best way to do this but on this scale it's fine
    let res: number = 0;
    for (let i: number = 100; i < 1000; i++) {
        for (let j: number = i; j < 1000; j++) {
            if (isPalindrome(i * j) && i * j > res) {
                res = i * j;
            }
        }
    }
    return res;
}
