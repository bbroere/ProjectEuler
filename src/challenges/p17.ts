/**
 * <p>If the numbers $1$ to $5$ are written out in words: one, two, three, four, five, then there are $3 + 3 + 5 + 4 + 4 = 19$ letters used in total.</p>
 * <p>If all the numbers from $1$ to $1000$ (one thousand) inclusive were written out in words, how many letters would be used? </p>
 * <br><p class="note"><b>NOTE:</b> Do not count spaces or hyphens. For example, $342$ (three hundred and forty-two) contains $23$ letters and $115$ (one hundred and fifteen) contains $20$ letters. The use of "and" when writing out numbers is in compliance with British usage.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=17'>source</a></p>
 * <p><i><b>Average runtime ~0.00007 ms</b></i></p>
 */
export function run(): number {
    // Think about how often certain words occur
    // one upto nine: 9 times each in each 100 range, so 10*9=90 times (plus 100 from 3 rows down)
    // ten upto nineteen: once in each 100 range, so 9 times
    // twenty upto ninety: 10 times in 100 range, so 10*10=100 times
    // x hundred: 100 times for each x, so 900 times hundred, plus 100 times x for each x
    // one thousand: 1 time
    let res: number = 0;
    // 1 - 10:
    res += (90 + 100) * "onetwothreefourfivesixseveneightnine".length;
    // 10 - 19:
    res += 10 * "teneleventwelvethirteenfourteenfifteensixteenseventeeneighteennineteen".length;
    // 20 - 90:
    res += 100 * "twentythirtyfortyfiftysixtyseventyeightyninety".length;
    // hundred:
    res += 900 * "hundredand".length;
    res -= 9 * "and".length; // whole hundreds!
    // one thousand
    res += "onethousand".length;
    return res;
}
