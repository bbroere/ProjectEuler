import {permutations} from "../utilities/sequences";

/**
 * <p>Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6, and each line adding to nine.</p>
 * <div class="center">
 * <img src="https://projecteuler.net/resources/images/0068_1.png?1678992052" class="dark_img" alt=""><br></div>
 * <p>Working <b>clockwise</b>, and starting from the group of three with the numerically lowest external node (4,3,2 in this example), each solution can be described uniquely. For example, the above solution can be described by the set: 4,3,2; 6,2,1; 5,1,3.</p>
 * <p>It is possible to complete the ring with four different totals: 9, 10, 11, and 12. There are eight solutions in total.</p>
 * <div class="center">
 * <table width="400" cellspacing="0" cellpadding="0"><tr><td width="100"><b>Total</b></td><td width="300"><b>Solution Set</b></td>
 * </tr><tr><td>9</td><td>4,2,3; 5,3,1; 6,1,2</td>
 * </tr><tr><td>9</td><td>4,3,2; 6,2,1; 5,1,3</td>
 * </tr><tr><td>10</td><td>2,3,5; 4,5,1; 6,1,3</td>
 * </tr><tr><td>10</td><td>2,5,3; 6,3,1; 4,1,5</td>
 * </tr><tr><td>11</td><td>1,4,6; 3,6,2; 5,2,4</td>
 * </tr><tr><td>11</td><td>1,6,4; 5,4,2; 3,2,6</td>
 * </tr><tr><td>12</td><td>1,5,6; 2,6,4; 3,4,5</td>
 * </tr><tr><td>12</td><td>1,6,5; 3,5,4; 2,4,6</td>
 * </tr></table></div>
 * <p>By concatenating each group it is possible to form 9-digit strings; the maximum string for a 3-gon ring is 432621513.</p>
 * <p>Using the numbers 1 to 10, and depending on arrangements, it is possible to form 16- and 17-digit strings. What is the maximum <b>16-digit</b> string for a "magic" 5-gon ring?</p>
 * <div class="center">
 * <img src="https://projecteuler.net/resources/images/0068_2.png?1678992052" class="dark_img" alt=""><br></div>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=68'>source</a></p>
 * <p><i><b>Average runtime ~300 ms</b></i></p>
 */
export function run(): number {
    // There are basically 10! permutations of the numbers 1-10 this way.
    // We are looking for the maximum 16-digit string, so we know that the digit 10 will only appear in one of the series
    // and is hence on the outer ring, resulting in basically 9! permutations which are all different.
    // This is not such a big number that we can't just list all the options, check if they are valid and then find the maximum.
    // We can see each of these permutations of length 10 as a series of 5 sets of 2, each being the beginning and end of a set of 3 respectively.
    // This will make it a bit easier to work with
    const allOneNinePermutations: [number, number][][] =
        permutations(["1", "2", "3", "4", "5", "6", "7", "8", "9"], (a, b) => a + b)
            .map((s: string) => [10, ...s.split("").map(Number)].reduce((c, n, i, a) => {
                if (i % 2 === 0) c.push([n, a[i + 1]]);
                return c;
            }, []));

    function checkValidRing(ring: [number, number][]): boolean {
        const sums: number[] = ring.map((r: [number, number], i: number) => r[0] + r[1] + ring[(i + 1) % ring.length][1]);
        return sums.every(s => s === sums[0]);
    }

    function createStringRep(ring: [number, number][]): string {
        const firstNumberMinimum = Math.min(...ring.map(r => r[0]));
        const start = ring.findIndex(r => r[0] === firstNumberMinimum);
        const sortedRing = ring.slice(start).concat(ring.slice(0, start));
        const mappedRepresentations = sortedRing.map((r, i) => r[0].toString() + sortedRing[(i + 1) % sortedRing.length][1].toString() + r[1].toString());
        return [mappedRepresentations[0], ...mappedRepresentations.slice(1).reverse()].join("");
    }

    return Math.max(...allOneNinePermutations.filter(checkValidRing).map(createStringRep).map(Number));
}
