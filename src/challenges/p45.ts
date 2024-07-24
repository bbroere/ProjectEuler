import {isHexagonal, isPentagonal, triangleNumber} from "../utilities/numbers";

export function run(): number {
    let i: number = 285;
    let ti: number = 0;
    do {
        i++;
        ti = triangleNumber(i);
    } while (!(isPentagonal(ti) && isHexagonal(ti)));
    return ti;
}
