export {};

function run(): void {
    const startDate = new Date(1901, 0, 1, 1);
    const endDate = new Date(2000, 11, 31, 1);
    let currentDate = new Date(startDate);
    let res = 0;
    while (currentDate < endDate) {
        if (currentDate.getDay() == 0) {
            res += 1;
        }
        currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    }
    console.log(res);
}