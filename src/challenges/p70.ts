import {eulerPhiList} from "../utilities/numbers";
import {arePermutations} from "../utilities/strings";

/**
 * <p>Euler's totient function, $\phi(n)$ [sometimes called the phi function], is used to determine the number of positive numbers less than or equal to $n$ which are relatively prime to $n$. For example, as $1, 2, 4, 5, 7$, and $8$, are all less than nine and relatively prime to nine, $\phi(9)=6$.<br>The number $1$ is considered to be relatively prime to every positive number, so $\phi(1)=1$. </p>
 * <p>Interestingly, $\phi(87109)=79180$, and it can be seen that $87109$ is a permutation of $79180$.</p>
 * <p>Find the value of $n$, $1 \lt n \lt 10^7$, for which $\phi(n)$ is a permutation of $n$ and the ratio $n/\phi(n)$ produces a minimum.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=70'>source</a></p>
 * <p><i><b>Average runtime ~2100 ms</b></i></p>
 */
export function run(): number {
    const boundInc: number = 10 ** 7 - 1;
    const phis: number[] = eulerPhiList(boundInc);
    let min: number = Infinity;
    const phiFactors: number[] = phis.map((phiN: number, n: number) => {
        const q: number = n / phiN;
        if (n > 1 && q < min && arePermutations(n.toString(), phiN.toString()))
            min = q;
        return q;
    });
    return phiFactors.indexOf(min);
}
