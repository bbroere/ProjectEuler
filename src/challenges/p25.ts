import {fibList} from "../utilities/fibonacci";

// Average runtime ~25 ms
export function run(): number {
    return fibList((f: bigint): boolean => `${f}`.length >= 1000).length;
}
