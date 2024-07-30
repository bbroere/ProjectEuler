export function run(): number {
    const maxMultiplier: number = 6;
    let base: number = 10;

    function sameDigits(a: number, b: number): boolean {
        return a.toString().split("").sort().join("") === b.toString().split("").sort().join("");
    }

    let result: number | undefined = undefined;
    do {
        for (let i: number = base; i < base * 10 / maxMultiplier; i++) {
            if (
                Array.from({length: maxMultiplier}, (_, index) => i * (index + 1))
                    .reduce((c, n) => c && sameDigits(i, n), true)
            ) {
                result = i;
                break;
            }
        }
        base *= 10;
    } while (!result);

    return result;
}
