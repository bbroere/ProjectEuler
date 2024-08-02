import assert from "node:assert";

/**
 * Returns an array of numbers from 1 to maxSize
 */
export function numbersWithMaxSize(maxSizeIncluding: number): number[] {
    assert(maxSizeIncluding > 0, 'numbersWithMaxSize');
    return Array.from({length: maxSizeIncluding}, (_, i: number) => i + 1);
}

/**
 * Returns the sum of all numbers in a given list (with an optional condition)
 */
export function sum(list: number[]): number;
export function sum(list: number[], condition: (n: number) => boolean): number;
export function sum(list: number[], condition?: (n: number) => boolean): number {
    return list.reduce((c: number, n: number): number => condition(n) ? c + n : c, 0);
}





/**
 * Filters a list on unique values.
 * Could also use a set though, but this is often faster than creating a set from a list
 */
export function filterUnique<T>(
    list: T[],
    compareFn: (lhs: T, rhs: T) => boolean = (lhs: T, rhs: T): boolean => lhs === rhs
): T[] {
    return list.filter((v: T, i: number, a: T[]): boolean => a.findIndex((t: T): boolean => compareFn(t, v)) === i);
}

/**
 * GroupBy function for arrays
 */
export function groupBy<T, K>(array: T[], keyFn: (t: T) => K): Map<K, T[]> {
    return array.reduce((result: Map<K, T[]>, currentValue: T) => {
        const groupKey: K = keyFn(currentValue);
        if (!result.has(groupKey)) {
            result.set(groupKey, []);
        }
        result.get(groupKey)!.push(currentValue);
        return result;
    }, new Map<K, T[]>());
}

export function mapMapValues<K, V, R>(map: Map<K, V>, fn: (_: V) => R, filterOpt: (_: [K, V]) => boolean = _ => true): Map<K, R> {
    return new Map<K, R>(Array.from(map.entries()).filter(filterOpt).map(([k, v]) => [k, fn(v)]));
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
