export function run(): number {
    // possible improvement: fib sequence is (odd - odd - even) repeated
    let f1: number = 1;
    let f2: number = 1;
    let sum: number = 0;
    while (f1 + f2 <= 4000000) {
        const next = f1 + f2;
        if (next % 2 == 0) {
            sum += next;
        }
        f1 = f2;
        f2 = next;
    }
    return sum;
}