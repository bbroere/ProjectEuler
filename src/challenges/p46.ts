import {primesWithUpperBound} from "../utilities/primes";

function findWithMax(primesUpperBound: number, nofSquares: number): number | undefined {
    const P: number[] = primesWithUpperBound(primesUpperBound);
    const Q: number[] = Array.from({length: nofSquares}, (_, i: number) => 2 * (i + 1) * (i + 1));
    const N: number[] = P.flatMap((p: number) => Q.map(q => p + q));
    for (let i: number = 3; i < P.slice(-1)[0]; i += 2) {
        if (!N.includes(i) && !P.includes(i) && i % 2 != 0) {
            return i;
        }
    }
    return undefined;
}

export function run(): number {
    return findWithMax(10000, 50);
}
