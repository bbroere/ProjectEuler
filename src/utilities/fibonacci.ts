import assert from "node:assert";

/**
 * Generates a list of fibonacci numbers until a stopCondition is met (not included)
 */
export function fibonacciListWithStopCondition(stopCondition: (i: number, f: bigint) => boolean): [number, bigint][] {
    let index: number = 2;
    let f1: bigint = BigInt(1);
    let f2: bigint = BigInt(1);
    const result: [number, bigint][] = [[1, f1]];
    while (!stopCondition(index, f2)) {
        result.push([index, f2]);
        index++;
        f2 = f1 + f2;
        f1 = f2 - f1;
    }
    return result;
}

/**
 * Generates a list of fibonacci numbers with an upperbound (included)
 */
export function fibonacciWithUpperBound(upperBound: bigint): [number, bigint][] {
    assert(upperBound > 0);
    return fibonacciListWithStopCondition((i: number, f: bigint): boolean => f > upperBound);
}


/**
 * Generates the n-th fibonacci number
 */
export function fibonacciN(index: number): [number, bigint] {
    assert(index > 0);
    return fibonacciListWithStopCondition((i: number, f: bigint): boolean => i > index)[index - 1];
}

