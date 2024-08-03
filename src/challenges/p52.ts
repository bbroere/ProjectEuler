import {forAll, numbersWithMaxSize} from "../utilities/sequences";

// Average runtime ~50 ms
export function run(): number {
    const maxMultiplier: number = 6;
    let base: number = 10;

    function sameDigits(a: number, b: number): boolean {
        return a.toString().split("").sort().join("") === b.toString().split("").sort().join("");
    }

    let result: number | undefined = undefined;
    const maxMultiplierArray: number[] = numbersWithMaxSize(maxMultiplier);
    do {
        for (let i: number = base; i < base * 10 / maxMultiplier; i++) {
            if (
                forAll(maxMultiplierArray.map((n: number) => i * n), (n: number) => sameDigits(i, n))
            ) {
                result = i;
                break;
            }
        }
        base *= 10;
    } while (!result);

    return result;
}
