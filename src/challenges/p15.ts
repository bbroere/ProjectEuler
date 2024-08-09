import {binomialCoefficient} from "../utilities/numbers";

/**
 * <p>Starting in the top left corner of a $2 \times 2$ grid, and only being able to move to the right and down, there are exactly $6$ routes to the bottom right corner.</p>
 * <div class="center">
 * <img src="https://projecteuler.net/resources/images/0015.png?1678992052" class="dark_img" alt=""></div>
 * <p>How many such routes are there through a $20 \times 20$ grid?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=15'>source</a></p>
 * <p><i><b>Average runtime ~0.004 ms</b></i></p>
 */
export function run(): bigint {
    // This is just the binomial coefficient ((2 * 20) 20)
    return binomialCoefficient(40, 20);
}
