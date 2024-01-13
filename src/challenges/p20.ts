export function run(): void {
    let res = BigInt(1);
    for (let i = 2; i <= 100; i++) {
        res *= BigInt(i);
    }
    console.log(
        res
            .toString()
            .split("")
            .map(Number)
            .reduce((c, n) => c + n, 0)
    );
}