import {isPalindrome} from "../utilities/strings";

/**
 * <p>If we take $47$, reverse and add, $47 + 74 = 121$, which is palindromic.</p>
 * <p>Not all numbers produce palindromes so quickly. For example,</p>
 * \begin{align}
 * 349 + 943 &amp;= 1292\\
 * 1292 + 2921 &amp;= 4213\\
 * 4213 + 3124 &amp;= 7337
 * \end{align}
 * <p>That is, $349$ took three iterations to arrive at a palindrome.</p>
 * <p>Although no one has proved it yet, it is thought that some numbers, like $196$, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, $10677$ is the first number to be shown to require over fifty iterations before producing a palindrome: $4668731596684224866951378664$ ($53$ iterations, $28$-digits).</p>
 * <p>Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is $4994$.</p>
 * <p>How many Lychrel numbers are there below ten-thousand?</p>
 * <p class="smaller">NOTE: Wording was modified slightly on 24 April 2007 to emphasise the theoretical nature of Lychrel numbers.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=55'>source</a></p>
 * <p><i><b>Average runtime ~14 ms</b></i></p>
 */
export function run(): number {
    const maxIterationsInc: number = 50;
    const maxNumberExc: number = 10000;
    let res: number = 0;

    for (let i: number = 1; i < maxNumberExc; i++) {
        let lychrel: boolean = true;
        let j: number = 0;
        let n: number = i;
        do {
            n = n + parseInt(n.toString().split("").reverse().join(""));
            lychrel = lychrel && !isPalindrome(n);
            j++;
        } while (j < maxIterationsInc && lychrel);
        if (lychrel) {
            res += 1;
        }
    }
    return res;
}
