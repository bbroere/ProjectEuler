/**
 *
 * <p>You are given the following information, but you may prefer to do some research for yourself.</p>
 * <ul><li>1 Jan 1900 was a Monday.</li>
 * <li>Thirty days has September,<br />
 * April, June and November.<br />
 * All the rest have thirty-one,<br />
 * Saving February alone,<br />
 * Which has twenty-eight, rain or shine.<br />
 * And on leap years, twenty-nine.</li>
 * <li>A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.</li>
 * </ul><p>How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=19'>source</a></p>
 * <p><i><b>Average runtime ~0.4 ms</b></i></p>
 */
export function run(): number {
    const startDate: Date = new Date(1901, 0, 1, 1);
    const endDate: Date = new Date(2000, 11, 31, 1);
    let currentDate: Date = new Date(startDate);
    let res: number = 0;
    while (currentDate < endDate) {
        if (currentDate.getDay() == 0)
            res += 1;
        currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    }
    return res;
}
