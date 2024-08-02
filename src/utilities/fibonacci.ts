import assert from "node:assert";

/**
 * Generates a list of fibonacci numbers until a stopCondition is met (not included)
 */
export function fibList(stopCondition: number): bigint[];
export function fibList(stopCondition: bigint): bigint[];
export function fibList(stopCondition: (_: bigint) => boolean): bigint[];
export function fibList(stopCondition: number | bigint | ((_: bigint) => boolean)): bigint[] {
    let stopFn: (_: bigint) => boolean;
    switch (typeof stopCondition){
        case typeof 0:
            stopFn = (n: bigint): boolean => n > BigInt(stopCondition as number);
            break;
        case typeof BigInt(0):
            stopFn = (n: bigint): boolean => n > (stopCondition as number);
            break;
        case typeof ((): boolean => true):
            stopFn = stopCondition as (_: bigint) => boolean;
            break;
        default:
            throw new Error('fibList');
    }
    let f1: bigint = BigInt(1);
    let f2: bigint = BigInt(1);
    const result: bigint[] = [1n, f1];
    while (!stopFn(f2)) {
        result.push(f2);
        f2 = f1 + f2;
        f1 = f2 - f1;
    }
    return result;
}





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

export function fibonacciFirstWithCondition(stopCondition: (i: number, f: bigint) => boolean): [number, bigint] {
    const fibs: [number, bigint][] = fibonacciListWithStopCondition(stopCondition).slice(-2);
    assert(fibs.length == 2, 'fibonacciFirstWithCondition');
    return [fibs[1][0] + 1, fibs[0][1] + fibs[1][1]];
}

/**
 * Generates a list of fibonacci numbers with an upperbound (included)
 */
export function fibonacciListWithUpperBound(upperBound: bigint): [number, bigint][] {
    assert(upperBound > 0, 'fibonacciListWithUpperBound');
    return fibonacciListWithStopCondition((i: number, f: bigint): boolean => f > upperBound);
}


/**
 * Generates the n-th fibonacci number
 */
export function fibonacciN(index: number): [number, bigint] {
    assert(index > 0, 'fibonacciN');
    return fibonacciListWithStopCondition((i: number, f: bigint): boolean => i > index)[index - 1];
}

