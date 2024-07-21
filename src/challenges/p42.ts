import {alphabeticalValue} from "../utilities/strings";
import {input} from "../inputs/p42";
import {triangleNumbers} from "../utilities/numbers";

export function run(): number {
    const allAlphabeticalValues: number[] = input.map(alphabeticalValue).sort((a: number, b: number) => a - b);
    const neededTriangleNumbers: number[] = triangleNumbers(allAlphabeticalValues[allAlphabeticalValues.length - 1]);
    return allAlphabeticalValues.filter((n: number) => neededTriangleNumbers.includes(n)).length;
}
