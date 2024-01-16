import {input} from "../inputs/p13";
import {sumWithConditionBigInt} from "../utilities/sequences";

export function run(): string {
    return sumWithConditionBigInt(input.split("\n").map(BigInt)).toString().slice(0, 10);
}