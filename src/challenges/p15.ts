export function run(): void {
    // This is just the binomial coefficient ((2 * 20) 20)
    // This equals:
    // (40 * 39 * 38 * ... * 21) / (20 * 19 * ... * 1)
    let n = 1;
    let d = 1;
    for (let i = 1; i <= 40; i++) {
        if (i > 20) {
            n *= i;
        } else {
            d *= i;
        }
    }
    console.log(n / d);
}