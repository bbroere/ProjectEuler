import {infiniteContinuedFractionNotationSqrt} from "../utilities/numbers";

// Average runtime ~80 ms
export function run(): number {
    const boundInc: number = 10000;
    let res: number = 0;
    for (let i = 0; i <= boundInc; i++)
        // no need to check if square, as period is 0, which is even
        if (infiniteContinuedFractionNotationSqrt(i).expansion.length % 2 === 1)
            res++;
    return res;
}
