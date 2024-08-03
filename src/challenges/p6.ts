// Average runtime ~0.00017 ms
export function run(): number {
    let sum: number = 0;
    let sumSquares: number = 0;
    for (let i: number = 1; i < 101; i++) {
        sum += i;
        sumSquares += i ** 2;
    }
    return sum ** 2 - sumSquares;
}
