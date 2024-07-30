import {input} from "../inputs/p54";
import {groupBy} from "../utilities/sequences";
import assert from "node:assert";

function basicPokerScore(hand: Card[]): number[] {
    const sortedHand: Card[] = hand.sort((a: Card, b: Card): number => a.value - b.value);
    const hasStraight: boolean = sortedHand.every((t: Card, i: number): boolean => i === 0 || t.value === sortedHand[i - 1].value + 1);
    const hasFlush: boolean = sortedHand.every((t: Card, i: number): boolean => i === 0 || t.suit === sortedHand[i - 1].suit);
    const valueMap: Map<number, Card[]> = groupBy(sortedHand, (t: Card): number => t.value);
    const valueCount: Map<number, number> = new Map([...valueMap.entries()].map(([n, cards]) => [n, cards.length]));
    const sortedCardValues: number[] = sortedHand.map((t: Card) => t.value).reverse();

    if (hasStraight && hasFlush && sortedHand[0].value === 10) {
        // Nothing is mentioned for what happens when this clashes (based on suits?) so we will just return 10
        return [10];
    } else if (hasStraight && hasFlush) {
        // If straight and flush, we will return the highest cards in order as second scores
        return [9, ...sortedCardValues];
    } else if ([...valueCount.values()].includes(4)) {
        // We will return the value of the 4 of a kind and the value of the other cards in order as second scores
        const value: number = [...valueCount.entries()].filter(([_, v]: [number, number]): boolean => v === 4)[0][0];
        return [8, value, ...sortedCardValues];
    } else if ([...valueCount.values()].includes(3) && [...valueCount.values()].includes(2)) {
        // We will return the value of the 3 of a kind and the value of the pair as second scores, followed by the other cards in order
        const threeValue: number = [...valueCount.entries()].filter(([_, v]: [number, number]): boolean => v === 3)[0][0];
        const twoValue: number = [...valueCount.entries()].filter(([_, v]: [number, number]): boolean => v === 2)[0][0];
        return [7, threeValue, twoValue, ...sortedCardValues];
    } else if (hasFlush) {
        // If flush, we will return the cards in order as second scores
        return [6, ...sortedCardValues];
    } else if (hasStraight) {
        // If straight, we will return the highest card as second score
        return [5, ...sortedCardValues];
    } else if ([...valueCount.values()].includes(3)) {
        // We will return the value of the 3 of a kind and the other cards in order as second scores
        const threeValue: number = [...valueCount.entries()].filter(([_, v]: [number, number]): boolean => v === 3)[0][0];
        return [4, threeValue, ...sortedCardValues];
    } else if ([...valueCount.values()].filter((t: number): boolean => t === 2).length === 2) {
        // We will return the values of the pairs and the other card in order as second scores
        const twoValues: number[] = [...valueCount.entries()].filter(([_, v]: [number, number]): boolean => v === 2).map(([k, _]: [number, number]): number => k);
        return [3, ...twoValues.sort().reverse(), ...sortedCardValues];
    } else if ([...valueCount.values()].includes(2)) {
        // We will return the value of the pair and the other cards in order as second scores
        const twoValue: number = [...valueCount.entries()].filter(([_, v]: [number, number]): boolean => v === 2)[0][0];
        return [2, twoValue, ...sortedCardValues];
    } else {
        // We will return the cards in order as second scores
        return [1, ...sortedCardValues];
    }
}

function pokerWinner(game: Card[][]): number {
    const [score1, score2]: number[][] = game.map(basicPokerScore);
    for (let i: number = 0; i < score1.length; i++) {
        if (score1[i] > score2[i]) {
            return 1;
        } else if (score1[i] < score2[i]) {
            return 2;
        }
    }
    assert(false, "inconclusive scoring");
}

// Easier than just dealing with strings
class Card {
    public suit: string;
    public value: number;

    constructor(input: string) {
        this.suit = input[1];
        this.value = input[0] === "T" ? 10 : input[0] === "J" ? 11 : input[0] === "Q" ? 12 : input[0] === "K" ? 13 : input[0] === "A" ? 14 : parseInt(input[0]);
    }
}

function testOutcome(gameString: string, expected: number): void {
    const cards: Card[] = gameString.split(" ").map((t: string) => new Card(t));
    assert(pokerWinner([cards.slice(0, 5), cards.slice(5)]) === expected);
}

export function run(): number {
    // First some tests
    testOutcome("5H 5C 6S 7S KD 2C 3S 8S 8D TD", 2);
    testOutcome("5D 8C 9S JS AC 2C 5C 7D 8S QH", 1);
    testOutcome("2D 9C AS AH AC 3D 6D 7D TD QD", 2);
    testOutcome("4D 6S 9H QH QC 3D 6D 7H QD QS", 1);
    testOutcome("2H 2D 4C 4D 4S 3C 3D 3S 9S 9D", 1);
    // Real deal (get it?)
    return input.map((gameString: string): [Card[], Card[]] => {
        const cards: Card[] = gameString.split(" ").map((t: string) => new Card(t));
        return [cards.slice(0, 5), cards.slice(5)];
    }).map(pokerWinner).filter((t: number): boolean => t === 1).length;
}
