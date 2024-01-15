export function run(): number {
    return BigInt(Math.pow(2, 1000))
        .toString()
        .split("")
        .map(Number)
        .reduce((c, n) => c + n, 0);
}