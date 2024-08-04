import {isSPolygonal, polygonalNumber} from "../utilities/numbers";

// Average runtime ~1.2 ms
export function run(): number {
    let i: number = 285;
    let ti: number = 0;
    do {
        i++;
        ti = polygonalNumber(3)(i);
    } while (!(isSPolygonal(5, ti) && isSPolygonal(6, ti)));
    return ti;
}
