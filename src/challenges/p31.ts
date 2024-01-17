export function run(): number {
    // It is easy to see that we know the following:
    // - Using only 1p coins, each goal can be created in 1 way, just only 1p coins
    // - Assume that we know how to make each goal upto 200 with the coins upto 10, being S_10(goal)
    //   Than we know that each goal that is smaller than 20, can be made in S_10(goal) ways, so S_20(goal) = S_10(goal)
    //   for each goal < 20.
    //   Now if goal = 20, we know we can make it in S_10(goal) + 1 ways, being with the 20p coin, but we can look at
    //   it from a different perspective. It is actually equal to S_10(goal) + S_20(0) = S_10(goal) + S_20(goal - 20).
    //   So this is the ways you can make the goal with all coins upto 10, plus the number of ways you can make the
    //   difference between the goal and the newly added coin with the coins upto and including 20.
    //   As we know the values S_10, we can construct the values of S_20 from this
    const set: number[] = [1, 2, 5, 10, 20, 50, 100, 200];
    const goal: number = 200;
    // Solution for no coins
    const solution: number[] = [...Array(goal + 1).values()].map(t => 0);
    solution[0] = 1; // 0 can be made 1 way
    // Now loop over all coins
    set.forEach((coin: number): void => {
        for (let i: number = coin; i <= goal; i++) {
            solution[i] += solution[i - coin];
        }
    });
    return solution.slice(-1)[0];
}
