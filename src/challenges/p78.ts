import {partitionNumbers} from "../utilities/numbers";

// Average runtime ~950 ms
export function run(): number {
    const pns: bigint[] = partitionNumbers(75000);
    for (let i: number = 0; i < pns.length; i++) {
        if (pns[i] % 1_000_000n == 0n)
            return i;
    }
    return undefined;
}
