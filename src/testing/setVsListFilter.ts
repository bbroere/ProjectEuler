import {filterUnique} from "../utilities/sequences";
import {timeFunction} from "./utils";

/**
 * This test shows that filtering many short arrays is faster using filter approach, while filtering big arrays is
 * faster using sets
 */
export function SetVsListFilter(): void {
    const bigNumber: number = 100000000;
    const smallNumber: number = 10;
    const randomArrayBig: number[] = [...Array(bigNumber).keys()].map((t: number) => Math.round(Math.random()));
    const randomArraySmall: number[] = [...Array(smallNumber).keys()].map((t: number) => Math.round(Math.random()));
    console.log("Array filtering, large arrays", timeFunction(() => filterUnique(randomArrayBig)));
    console.log("Using sets, large arrays", timeFunction(() => new Set(randomArrayBig)));
    console.log("Array filtering, many short arrays", timeFunction(() => filterUnique(randomArraySmall), bigNumber));
    console.log("Using sets, many short arrays", timeFunction(() => new Set(randomArraySmall), bigNumber));
}
