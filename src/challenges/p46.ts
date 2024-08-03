import {primesWithUpperBound} from "../utilities/factorization";
import {numbersWithMaxSize} from "../utilities/sequences";

// Average runtime ~6.5 ms
export function run(): number {
    const primesUpperBound: number = 10000;
    const nofSquares: number = 50;
    const P: number[] = primesWithUpperBound(primesUpperBound);
    const Q: number[] = numbersWithMaxSize(nofSquares + 1).map((i: number) => 2 * i * i);
    const N: number[] = P.flatMap((p: number) => Q.map(q => p + q));
    for (let i: number = 3; i < P.slice(-1)[0]; i += 2) {
        if (!N.includes(i) && !P.includes(i) && i % 2 != 0) {
            return i;
        }
    }
}
