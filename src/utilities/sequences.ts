import assert from "node:assert";

/**
 * Filters a list on unique values.
 * Could also use a set though, but this is often faster than creating a set from a list
 */
export function filterUnique<T>(list: T[]): T[] {
    return list.filter((v: T, i: number, a: T[]): boolean => a.indexOf(v) === i);
}

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

/**
 * Makes a list of all permutations of a given list with a given operation
 */
export function permutations<T>(l: T[], op: (lhs: T, rhs: T) => T): T[] {
    assert(l.length > 0);
    if (l.length == 1) {
        return [l[0]];
    } else {
        const res: T[] = [];
        for (let i: number = 0; i < l.length; i++) {
            const newL: T[] = [...l.slice(0, i), ...l.slice(i + 1, l.length)];
            permutations(newL, op).map((s: T) => op(l[i], s)).forEach((t: T) => res.push(t));
        }
        return res;
    }
}