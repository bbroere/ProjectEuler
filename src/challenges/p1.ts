export {};

function run(): void {
    let sum: number = 0;
    for (let i: number = 0; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}