/**
 * Generates a list of fibonacci numbers until a stopCondition is met (not included)
 */
export function fibList(stopCondition: number): bigint[];
export function fibList(stopCondition: bigint): bigint[];
export function fibList(stopCondition: (_: bigint) => boolean): bigint[];
export function fibList(stopCondition: number | bigint | ((_: bigint) => boolean)): bigint[] {
    let stopFn: (_: bigint) => boolean;
    switch (typeof stopCondition) {
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
