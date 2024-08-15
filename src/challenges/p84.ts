import {numbersWithMaxSize} from "../utilities/sequences";
import assert from "node:assert";

/**
 * <p>In the game, <strong>Monopoly</strong>, the standard board is set up in the following way:</p>
 * <div class="center">
 * <img src="https://projecteuler.net/resources/images/0084_monopoly_board.png?1678992052" alt="0084_monopoly_board.png">
 * </div>
 * <p>A player starts on the GO square and adds the scores on two 6-sided dice to determine the number of squares they advance in a clockwise direction. Without any further rules we would expect to visit each square with equal probability: 2.5%. However, landing on G2J (Go To Jail), CC (community chest), and CH (chance) changes this distribution.</p>
 * <p>In addition to G2J, and one card from each of CC and CH, that orders the player to go directly to jail, if a player rolls three consecutive doubles, they do not advance the result of their 3rd roll. Instead they proceed directly to jail.</p>
 * <p>At the beginning of the game, the CC and CH cards are shuffled. When a player lands on CC or CH they take a card from the top of the respective pile and, after following the instructions, it is returned to the bottom of the pile. There are sixteen cards in each pile, but for the purpose of this problem we are only concerned with cards that order a movement; any instruction not concerned with movement will be ignored and the player will remain on the CC/CH square.</p>
 * <ul><li>Community Chest (2/16 cards):
 * <ol><li>Advance to GO</li>
 * <li>Go to JAIL</li>
 * </ol></li>
 * <li>Chance (10/16 cards):
 * <ol><li>Advance to GO</li>
 * <li>Go to JAIL</li>
 * <li>Go to C1</li>
 * <li>Go to E3</li>
 * <li>Go to H2</li>
 * <li>Go to R1</li>
 * <li>Go to next R (railway company)</li>
 * <li>Go to next R</li>
 * <li>Go to next U (utility company)</li>
 * <li>Go back 3 squares.</li>
 * </ol></li>
 * </ul><p>The heart of this problem concerns the likelihood of visiting a particular square. That is, the probability of finishing at that square after a roll. For this reason it should be clear that, with the exception of G2J for which the probability of finishing on it is zero, the CH squares will have the lowest probabilities, as 5/8 request a movement to another square, and it is the final square that the player finishes at on each roll that we are interested in. We shall make no distinction between "Just Visiting" and being sent to JAIL, and we shall also ignore the rule about requiring a double to "get out of jail", assuming that they pay to get out on their next turn.</p>
 * <p>By starting at GO and numbering the squares sequentially from 00 to 39 we can concatenate these two-digit numbers to produce strings that correspond with sets of squares.</p>
 * <p>Statistically it can be shown that the three most popular squares, in order, are JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24, and GO (3.09%) = Square 00. So these three most popular squares can be listed with the six-digit modal string: 102400.</p>
 * <p>If, instead of using two 6-sided dice, two 4-sided dice are used, find the six-digit modal string.</p>
 *
 * <p>Generated on 2024-08-15 from <a href='https://projecteuler.net/problem=84'>source</a></p>
 * <p><i><b>Average runtime ~6.7 ms</b></i></p>
 */
export function run(): number {
    // We are going to do this by working out how the game can develop
    // We start from 00 and basically do turns, determining the probability you will be on square X after Y turns
    // If we choose the amount of turns high enough, this should converge to the appropriate distribution

    // Chances we throw a given amount
    // This has been set up for 2 4-sided dice
    const twoDiceChances: Map<number, number> = new Map<number, number>([
        [2, 1 / 16],
        [3, 2 / 16],
        [4, 3 / 16],
        [5, 4 / 16],
        [6, 3 / 16],
        [7, 2 / 16],
        [8, 1 / 16],
    ]);

    // When you throw a double 3 times in a row, you go to jail
    // This function calculates the chance that your throw is the third double in a row
    // This has been set up for 2 4-sided dice
    function tripleDoubleJailChance(n: number): number {
        return (n % 2 == 0) ? 1 / (4 ** 3) : 0;
    }

    // Given x, determines smallest n s.t. 10 * n + 5 > x
    function nextFivePlusMultipleOfTen(x: number): number {
        if (x % 10 < 5)
            return Math.floor(x / 10) * 10 + 5;
        else
            return Math.ceil(x / 10) * 10 + 5;
    }

    // Converts a number to the string interpretation of a square
    // This could probably be done without, but it's how I've done it :)
    function nToStr(n: number): string {
        return ("0" + n).slice(-2);
    }

    // Creates a map of all cards to a given initial value
    // Note that the initial is a generator function as we don't want by-reference things to get in the way
    function mapOfAllCards<T>(initial: () => T): Map<string, T> {
        return new Map<string, T>([...numbersWithMaxSize(40).map(n =>
            [nToStr(n - 1), initial()] as [string, T])]);
    }

    // Chances of moving on the Community-Chest (CC) squares
    const ccChanges: Map<string, number> = new Map<string, number>([
        ["00", 1 / 16],
        ["10", 1 / 16]
    ]);

    // Chances of moving on the Chance (CH) squares
    function chChances(from: string): Map<string, number> {
        const fromInt = parseInt(from);
        // Add 40 to not get to a negative square
        const backThree: string = nToStr((fromInt - 3 + 40) % 40);
        // R's (Railways) are always on x*10 + 5
        const nextR: string = nToStr(nextFivePlusMultipleOfTen(fromInt) % 40);
        // Two U's (Utility), on 12 and 28
        const nextU: string = nToStr((fromInt <= 11 || fromInt >= 28) ? 12 : 28);
        // This map is independent of the square you are on
        const basisMap: Map<string, number> = new Map<string, number>([
            ["00", 1 / 16], // GO
            ["10", 1 / 16], // JAIL
            ["11", 1 / 16], // C1
            ["24", 1 / 16], // E3
            ["39", 1 / 16], // H2
            ["05", 1 / 16] // R1
        ]);
        // Now add the parts that are dependent on the square you end up in
        basisMap.set(backThree, (basisMap.get(backThree) ?? 0) + (1 / 16));
        basisMap.set(nextR, (basisMap.get(nextR) ?? 0) + (2 / 16));
        basisMap.set(nextU, (basisMap.get(nextU) ?? 0) + (1 / 16));
        return basisMap;
    }

    // CC squares are on 2, 17 and 33
    function isCC(s: string): boolean {
        return ["02", "17", "33"].includes(s);
    }

    // CH squares are on 7, 22 and 36
    function isCH(s: string): boolean {
        return ["07", "22", "36"].includes(s);
    }

    // Adds a given chance to a given key in a given map
    // If the chance was to be added to key 30 (Go to jail), we add the chance to 10 (Jail) instead
    function addChance(chances: Map<string, number>, key: string, chance: number): void {
        assert(parseInt(key) < 40, "addChance");
        if (key != "30")
            chances.set(key, chances.get(key) + chance);
        else
            chances.set("10", chances.get("10") + chance);
    }

    // It is sufficient to determine the chances to land on each other square from each starting square (including itself),
    // with exception to Go to Jail as the chance to land there is 0 anyway
    const proceedingChances: Map<string, Map<string, number>> = mapOfAllCards(() => mapOfAllCards(() => 0));
    for (let currentNumber = 0; currentNumber < 40; currentNumber++) {
        twoDiceChances.forEach((diceChance, steps) => {
            const currentProceedingChances: Map<string, number> = proceedingChances.get(nToStr(currentNumber));
            const landingSquare: string = nToStr((currentNumber + steps) % 40);
            const extraJailChance: number = tripleDoubleJailChance(steps);
            currentProceedingChances.set("10", currentProceedingChances.get("10") + diceChance * extraJailChance);
            if (isCC(landingSquare)) {
                addChance(currentProceedingChances, landingSquare, (1 - extraJailChance) * diceChance * (14 / 16));
                ccChanges.forEach((ccChance, ccLanding) => addChance(currentProceedingChances, ccLanding, (1 - extraJailChance) * diceChance * ccChance));
            } else if (isCH(landingSquare)) {
                addChance(currentProceedingChances, landingSquare, (1 - extraJailChance) * diceChance * (6 / 16));
                chChances(landingSquare).forEach((chChance, chLanding) => addChance(currentProceedingChances, chLanding, (1 - extraJailChance) * diceChance * chChance));
            } else {
                addChance(currentProceedingChances, landingSquare, (1 - extraJailChance) * diceChance);
            }
        });
    }
    // Now start from the GO tile (00) and do a bunch of turns to see how the odds turn out
    let currentChances: Map<string, number> = new Map<string, number>();
    // First make a copy of the starting chances for the GO tile
    proceedingChances.get("00").forEach((v, k) => currentChances.set(k.toString(), Number(v)));
    // Now do the turns, about 100 should deliver the average
    for (let turn = 0; turn < 100; turn++) {
        // Clone
        const newCurrentChances: Map<string, number> = mapOfAllCards(() => 0);
        currentChances.forEach((currentChance, startingSquare) => {
            proceedingChances.get(startingSquare).forEach((travelChance, endingSquare) => {
                addChance(newCurrentChances, endingSquare, currentChance * travelChance);
            });
        });
        // 'Save state'
        currentChances = newCurrentChances;
    }

    // Sort by probability and concatenate the first three keys
    return parseInt([...currentChances.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(v => v[0]).join(""));
}
