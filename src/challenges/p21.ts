import {amicableMate} from "../utilities/numbers";
import {sumWithCondition} from "../utilities/sequences";

export function run(): number {
    const a: number[] = [];
    for (let i: number = 2; i < 10000; i++) {
        if (!a.includes(i)) {
            const m: number = amicableMate(i);
            if (m != -1 && i != m) {
                a.push(i, m);
            }
        }
    }
    return sumWithCondition(a);
}