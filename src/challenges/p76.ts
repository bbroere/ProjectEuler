import {partitionNumber} from "../utilities/numbers";

/**
 * <p>It is possible to write five as a sum in exactly six different ways:</p>
 * \begin{align}
 * &amp;4 + 1\\
 * &amp;3 + 2\\
 * &amp;3 + 1 + 1\\
 * &amp;2 + 2 + 1\\
 * &amp;2 + 1 + 1 + 1\\
 * &amp;1 + 1 + 1 + 1 + 1
 * \end{align}
 * <p>How many different ways can one hundred be written as a sum of at least two positive integers?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=76'>source</a></p>
 * <p><i><b>Average runtime ~0.01 ms</b></i></p>
 */
export function run(): bigint {
    return partitionNumber(100) - 1n;
}
