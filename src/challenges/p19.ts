// Average runtime ~0.4 ms
export function run(): number {
    const startDate: Date = new Date(1901, 0, 1, 1);
    const endDate: Date = new Date(2000, 11, 31, 1);
    let currentDate: Date = new Date(startDate);
    let res: number = 0;
    while (currentDate < endDate) {
        if (currentDate.getDay() == 0) {
            res += 1;
        }
        currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    }
    return res;
}
