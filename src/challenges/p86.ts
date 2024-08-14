/**
 * <p>A spider, S, sits in one corner of a cuboid room, measuring $6$ by $5$ by $3$, and a fly, F, sits in the opposite corner. By travelling on the surfaces of the room the shortest "straight line" distance from S to F is $10$ and the path is shown on the diagram.</p>
 * <div class="center">
 * <img src="https://projecteuler.net/resources/images/0086.png?1678992052" class="dark_img" alt=""><br></div>
 * <p>However, there are up to three "shortest" path candidates for any given cuboid and the shortest route doesn't always have integer length.</p>
 * <p>It can be shown that there are exactly $2060$ distinct cuboids, ignoring rotations, with integer dimensions, up to a maximum size of $M$ by $M$ by $M$, for which the shortest route has integer length when $M = 100$. This is the least value of $M$ for which the number of solutions first exceeds two thousand; the number of solutions when $M = 99$ is $1975$.</p>
 * <p>Find the least value of $M$ such that the number of solutions first exceeds one million.</p>
 *
 * <p>Generated on 2024-08-13 from <a href='https://projecteuler.net/problem=86'>source</a></p>
 * <p><i><b>Average runtime ~1300 ms</b></i></p>
 */
export function run(): number {
    const goal: number = 1000000;
    let found: number = 0;
    // As long as we make sure there is always at least one side with length exactly M, we can iterate over all possible combinations of the other two sides
    let M: number = 2;
    while (found <= goal) {
        M++;
        for (let a = 1; a <= M; a++)
            for (let b = a; b <= M; b++) {
                const c = M;
                const minLength = Math.sqrt(Math.min((a + b) ** 2 + c ** 2, (a + c) ** 2 + b ** 2, (b + c) ** 2 + a ** 2));
                if (Number.isInteger(minLength))
                    found++;
            }
    }
    return M;
}
