import {isHexagonalNumber, isPentagonalNumber, triangleNumber} from "../utilities/numbers";

// Average runtime ~1.2 ms
export function run(): number {
    let i: number = 285;
    let ti: number = 0;
    do {
        i++;
        ti = triangleNumber(i);
    } while (!(isPentagonalNumber(ti) && isHexagonalNumber(ti)));
    return ti;
}
