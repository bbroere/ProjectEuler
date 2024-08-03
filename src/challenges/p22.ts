import {input} from "../inputs/p22";
import {alphabeticalValue} from "../utilities/strings";

// Average runtime ~1.4 ms
export function run(): number {
    return input.replaceAll('"', "")
        .split(",").sort()
        .reduce((c: number, n: string, i: number) => c + (i + 1) * alphabeticalValue(n), 0);
}
