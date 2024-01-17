/**
 * Returns execution time per execution (average) in ms for a function
 */
export function timeFunction(fn: () => void, nofExecutions: number = 1): number {
    const start: number = new Date().getTime();
    for (let i = 0; i < nofExecutions; i++) {
        fn();
    }
    return ((new Date().getTime() - start) / nofExecutions);
}