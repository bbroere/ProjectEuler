import {eulerPhiList} from "../utilities/numbers";

// Average runtime ~60 ms
export function run(): number {
    const phis: number[] = eulerPhiList(1_000_000);
    const max: number = 0;
    return phis.reduce((acc: [number, number], phiN: number, n: number): [number, number] => {
        if (n / phiN > acc[1])
            return [n, n / phiN];
        return acc;
    }, [0, 0])[0];
}
