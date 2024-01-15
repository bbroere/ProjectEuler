export function run(): number {
    // let's start simple, when we find a factor, divide it out and break if need be
    let original: number = 600851475143;
    let c: number = 2;
    const factors: number[] = [];
    while (original > c) {
        if (original % c == 0) {
            factors.push(c);
            original = original / c;
        }
        c++;
    }
    return Math.max(...factors);
}