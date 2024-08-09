import {arePermutations} from "../utilities/strings";
import {eulerPhiList} from "../utilities/numbers";

// Average runtime ~2100 ms (needs optimization)
export function run(): number {
    const boundInc: number = 10 ** 7 - 1;
    const phis: number[] = eulerPhiList(boundInc);
    let min: number = Infinity;
    const phiFactors: number[] = phis.map((phiN: number, n: number) => {
        const q: number = n / phiN;
        if (n > 1 && q < min && arePermutations(n.toString(), phiN.toString()))
            min = q;
        return q;
    });
    return phiFactors.indexOf(min);
}
