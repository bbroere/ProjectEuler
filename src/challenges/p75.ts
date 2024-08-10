import {pythagoreanTripletsWithSumBound} from "../utilities/geometry";
import {groupBy, sum} from "../utilities/sequences";

/**
 * <p>It turns out that $\pu{12 cm}$ is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.</p>
 * <ul style="list-style-type:none;">
 * <li>$\pu{\mathbf{12} \mathbf{cm}}$: $(3,4,5)$</li>
 * <li>$\pu{\mathbf{24} \mathbf{cm}}$: $(6,8,10)$</li>
 * <li>$\pu{\mathbf{30} \mathbf{cm}}$: $(5,12,13)$</li>
 * <li>$\pu{\mathbf{36} \mathbf{cm}}$: $(9,12,15)$</li>
 * <li>$\pu{\mathbf{40} \mathbf{cm}}$: $(8,15,17)$</li>
 * <li>$\pu{\mathbf{48} \mathbf{cm}}$: $(12,16,20)$</li></ul>
 * <p>In contrast, some lengths of wire, like $\pu{20 cm}$, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using $\pu{120 cm}$ it is possible to form exactly three different integer sided right angle triangles.</p>
 * <ul style="list-style-type:none;">
 * <li>$\pu{\mathbf{120} \mathbf{cm}}$: $(30,40,50)$, $(20,48,52)$, $(24,45,51)$</li></ul>
 *
 * <p>Given that $L$ is the length of the wire, for how many values of $L \le 1\,500\,000$ can exactly one integer sided right angle triangle be formed?</p>
 *
 * <p>Generated on 2024-08-10 from <a href='https://projecteuler.net/problem=75'>source</a></p>
 * <p><i><b>Average runtime ~1200 ms</b></i></p>
 */
export function run(): number {
    return [...groupBy(pythagoreanTripletsWithSumBound(1_500_000), t => sum(t)).entries()].filter(([_k, v]) => v.length === 1).length;
}
