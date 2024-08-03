import {factorize} from "../utilities/factorization";

// Average runtime ~330 ms
export function run(): number {
    const min: number = 125000;

    let p1: [number, boolean] = [min, factorize(min).size == 4];
    let p2: [number, boolean] = [min + 1, factorize(min + 1).size == 4];
    let p3: [number, boolean] = [min + 2, factorize(min + 2).size == 4];
    let p4: [number, boolean] = [min + 3, factorize(min + 3).size == 4];

    while (!(p1[1] && p2[1] && p3[1] && p4[1])) {
        p1 = p2;
        p2 = p3;
        p3 = p4;
        p4 = [p4[0] + 1, factorize(p4[0] + 1).size == 4];
    }
    return p1[0];
}
