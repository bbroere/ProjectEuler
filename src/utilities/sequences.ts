import assert from "node:assert";

/**
 * Returns an array of numbers from 1 to maxSize
 */
export function numbersWithMaxSize(maxSizeIncluding: number): number[] {
    assert(maxSizeIncluding > 0, 'numbersWithMaxSize');
    return [...Array(Math.floor(maxSizeIncluding) + 1).keys()].slice(1);
}

/**
 * Returns the sum of all numbers in a given list (with an optional condition)
 */
export function sum(list: number[]): number;
export function sum(list: bigint[]): bigint;
export function sum(list: number[], condition: (n: number) => boolean): number;
export function sum(list: bigint[], condition: (n: bigint) => boolean): bigint;
export function sum(list: number[] | bigint[], condition?: ((n: number) => boolean) | ((n: bigint) => boolean)): number | bigint {
    switch (typeof list[0]) {
        case typeof 0:
            const numberCondition = condition ? condition as (_: number) => boolean : (_: number): boolean => true;
            return (list as number[]).reduce((c, n): number => numberCondition(n) ? c + n : c, 0);
        case typeof BigInt(0):
            const bigintCondition = condition ? condition as (_: bigint) => boolean : (_: bigint): boolean => true;
            return (list as bigint[]).reduce((c, n): bigint => bigintCondition(n) ? c + n : c, 0n);
        default:
            throw new Error('sum');
    }
}

/**
 * Returns the product of all numbers in a given list (with an optional condition)
 */
export function prod(list: number[]): number;
export function prod(list: bigint[]): bigint;
export function prod(list: number[], condition: (n: number) => boolean): number;
export function prod(list: bigint[], condition: (n: bigint) => boolean): bigint;
export function prod(list: number[] | bigint[], condition?: ((n: number) => boolean) | ((n: bigint) => boolean)): number | bigint {
    switch (typeof list[0]) {
        case typeof 0:
            const numberCondition = condition ? condition as (_: number) => boolean : (_: number): boolean => true;
            return (list as number[]).reduce((c, n): number => numberCondition(n) ? c * n : c, 1);
        case typeof BigInt(0):
            const bigintCondition = condition ? condition as (_: bigint) => boolean : (_: bigint): boolean => true;
            return (list as bigint[]).reduce((c, n): bigint => bigintCondition(n) ? c * n : c, 1n);
        default:
            throw new Error('prod');
    }
}

/**
 * Makes a list of all permutations of a given list with a given operation
 */
export function permutations<T>(list: T[], op: (lhs: T, rhs: T) => T): T[] {
    assert(list.length > 0);
    if (list.length === 1) return [list[0]];

    const result: T[] = [];
    for (let i = 0; i < list.length; i++) {
        const remaining = list.slice(0, i).concat(list.slice(i + 1));
        permutations(remaining, op).forEach(s => result.push(op(list[i], s)));
    }
    return result;
}

/**
 * Filters a list on unique values.
 * Could also use a set though, but this is often faster than creating a set from a list (see tests)
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

/**
 * Checks if all elements in a list satisfy a given function
 */
export function forAll<T>(list: T[], fn: (_: T) => boolean): boolean
export function forAll<T>(list: T[], fn: (_: T, index: number) => boolean): boolean
export function forAll<T>(list: T[], fn: ((_: T) => boolean) | ((_: T, index: number) => boolean)): boolean {
    return list.reduce((c: boolean, n: T, i: number): boolean => c && fn(n, i), true);
}

/**
 * Maps a map to a new map with a given function and an optional filter
 */
export function mapMapValues<K, V, R>(map: Map<K, V>, fn: (_: V) => R, filterOpt: (_: [K, V]) => boolean = _ => true): Map<K, R> {
    return new Map<K, R>(Array.from(map.entries()).filter(filterOpt).map(([k, v]) => [k, fn(v)]));
}

/**
 * Generates the first n elements of a sequence based on a function, starting from 1
 */
export function generateFirstN<T>(n: number, fn: (_: number) => T): T[] {
    return numbersWithMaxSize(n).map(fn);
}

/**
 * Generates the first n elements of a sequence based on a function, starting from 1, while a condition is met
 */
export function generateWhile<T>(fn: (_: number) => T, condition: (_: T) => boolean): T[] {
    let i: number = 1;
    const res: T[] = [];
    while (condition(fn(i))) {
        res.push(fn(i));
        i++;
    }
    return res;
}
