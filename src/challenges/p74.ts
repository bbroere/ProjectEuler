import {factorial} from "../utilities/numbers";

// Average runtime ~9000 ms (needs optimization)
export function run(): number {
    const boundExclusive: number = 1000000;
    function nextInChain(n: number): number {
        return [...String(n)].reduce((c: number, d: string) => c + Number(factorial(Number(d))), 0);
    }
    let count: number = 0;
    for (let i: number = 1; i < boundExclusive; i++) {
        const chain: number[] = [i];
        let next: number = nextInChain(i);
        while (!chain.includes(next)) {
            chain.push(next);
            next = nextInChain(next);
        }
        if (chain.length == 60)
            count++;
    }
    return count;
}
