import {input} from "../inputs/p54";
import {Card, pokerWinner, testPokerImplementation} from "../games/poker";

// Average runtime ~2.5 ms
export function run(): number {
    // First some tests
    testPokerImplementation();
    // Real deal (get it?)
    return input.map((gameString: string): [Card[], Card[]] => {
        const cards: Card[] = gameString.split(" ").map((t: string) => new Card(t));
        return [cards.slice(0, 5), cards.slice(5)];
    }).map(pokerWinner).filter((t: number): boolean => t === 1).length;
}


