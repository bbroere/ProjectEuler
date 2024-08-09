import {amicableMate} from "../utilities/numbers";
import {sum} from "../utilities/sequences";

/**
 * <p>Let $d(n)$ be defined as the sum of proper divisors of $n$ (numbers less than $n$ which divide evenly into $n$).<br>
 * If $d(a) = b$ and $d(b) = a$, where $a \ne b$, then $a$ and $b$ are an amicable pair and each of $a$ and $b$ are called amicable numbers.</p>
 * <p>For example, the proper divisors of $220$ are $1, 2, 4, 5, 10, 11, 20, 22, 44, 55$ and $110$; therefore $d(220) = 284$. The proper divisors of $284$ are $1, 2, 4, 71$ and $142$; so $d(284) = 220$.</p>
 * <p>Evaluate the sum of all the amicable numbers under $10000$.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=21'>source</a></p>
 * <p><i><b>Average runtime ~52 ms</b></i></p>
 */
export function run(): number {
    const a: number[] = [];
    for (let i: number = 2; i < 10000; i++) {
        if (!a.includes(i)) {
            const m: number = amicableMate(i);
            if (m != -1 && i != m) {
                a.push(i, m);
            }
        }
    }
    return sum(a);
}
