export function run(): number {
    return BigInt(Math.pow(2, 1000))
        .toString()
        .split("")
        .map(Number)
        .reduce((c: number, n: number) => c + n, 0);
}