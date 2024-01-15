/**
 * Sums up all number values in a list with an optional condition
 */
export function sumWithCondition(
    list: number[],
    condition: (n: number) => boolean = (_: number): boolean => true
): number {
    return _sumWithConditionG(list, condition, 0, (l: number, r: number) => l + r);
}

/**
 * Sums up all bigint values in a list with an optional condition
 */
export function sumWithConditionBigInt(
    list: bigint[],
    condition: (n: bigint) => boolean = (_: bigint): boolean => true
): bigint {
    return _sumWithConditionG(list, condition, 0n, (l: bigint, r: bigint) => l + r);
}

/**
 * Sums up all T values in a list with a condition
 */
function _sumWithConditionG<T>(
    list: T[],
    condition: (n: T) => boolean,
    zero: T,
    op: (lhs: T, rhs: T) => T
): T {
    return list.reduce((clt: T, nxt: T): T => {
        if (condition(nxt)) {
            return op(clt, nxt);
        }
        return clt;
    }, zero);
}

