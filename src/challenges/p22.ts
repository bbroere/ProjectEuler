import {input} from "../inputs/p22";
import {alphabeticalValue} from "../utilities/strings";


export function run(): number {
    return input.replaceAll('"', "")
        .split(",").sort()
        .reduce((c: number, n: string, i: number) => c + (i + 1) * alphabeticalValue(n), 0);
}
