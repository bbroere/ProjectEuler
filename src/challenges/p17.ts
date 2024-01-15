export function run(): number {
    // Think about how often certain words occur
    // one upto nine: 9 times each in each 100 range, so 10*9=90 times (plus 100 from 3 rows down)
    // ten upto nineteen: once in each 100 range, so 9 times
    // twenty upto ninety: 10 times in 100 range, so 10*10=100 times
    // x hundred: 100 times for each x, so 900 times hundred, plus 100 times x for each x
    // one thousand: 1 time
    let res = 0;
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