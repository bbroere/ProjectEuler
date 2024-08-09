import {eulerPhiList} from "../utilities/numbers";

/**
 * <p>Euler's totient function, $\phi(n)$ [sometimes called the phi function], is defined as the number of positive integers not exceeding $n$ which are relatively prime to $n$. For example, as $1$, $2$, $4$, $5$, $7$, and $8$, are all less than or equal to nine and relatively prime to nine, $\phi(9)=6$.</p>
 * <div class="center">
 * <table class="grid center"><tr><td><b>$n$</b></td>
 * <td><b>Relatively Prime</b></td>
 * <td><b>$\phi(n)$</b></td>
 * <td><b>$n/\phi(n)$</b></td>
 * </tr><tr><td>2</td>
 * <td>1</td>
 * <td>1</td>
 * <td>2</td>
 * </tr><tr><td>3</td>
 * <td>1,2</td>
 * <td>2</td>
 * <td>1.5</td>
 * </tr><tr><td>4</td>
 * <td>1,3</td>
 * <td>2</td>
 * <td>2</td>
 * </tr><tr><td>5</td>
 * <td>1,2,3,4</td>
 * <td>4</td>
 * <td>1.25</td>
 * </tr><tr><td>6</td>
 * <td>1,5</td>
 * <td>2</td>
 * <td>3</td>
 * </tr><tr><td>7</td>
 * <td>1,2,3,4,5,6</td>
 * <td>6</td>
 * <td>1.1666...</td>
 * </tr><tr><td>8</td>
 * <td>1,3,5,7</td>
 * <td>4</td>
 * <td>2</td>
 * </tr><tr><td>9</td>
 * <td>1,2,4,5,7,8</td>
 * <td>6</td>
 * <td>1.5</td>
 * </tr><tr><td>10</td>
 * <td>1,3,7,9</td>
 * <td>4</td>
 * <td>2.5</td>
 * </tr></table></div>
 * <p>It can be seen that $n = 6$ produces a maximum $n/\phi(n)$ for $n\leq 10$.</p>
 * <p>Find the value of $n\leq 1\,000\,000$ for which $n/\phi(n)$ is a maximum.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=69'>source</a></p>
 * <p><i><b>Average runtime ~60 ms</b></i></p>
 */
export function run(): number {
    const phis: number[] = eulerPhiList(1_000_000);
    const max: number = 0;
    return phis.reduce((acc: [number, number], phiN: number, n: number): [number, number] => {
        if (n / phiN > acc[1])
            return [n, n / phiN];
        return acc;
    }, [0, 0])[0];
}
