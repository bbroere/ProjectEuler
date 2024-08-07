import {generateWhile, numbersWithMaxSize} from "../utilities/sequences";
import {polygonalNumber} from "../utilities/numbers";

// Average runtime ~13.29 ms
export function run(): number {
    const allTriangleNumbers: number[] = generateWhile(polygonalNumber(3), n => n < 10000).filter(n => n >= 1000);
    const allSPolygonals: [number, number][] =
        numbersWithMaxSize(5).flatMap(
            (s: number): [number, number][] =>
                generateWhile(polygonalNumber(s + 3), n => n < 10000)
                    .filter(n => n >= 1000)
                    .map((n: number): [number, number] => [s + 3, n])
        );

    for (let i = 0; i < allTriangleNumbers.length; i++) {
        const match: [number, number][] | undefined = extendCurrentMatch([[3, allTriangleNumbers[i]]], allSPolygonals);
        if (match !== undefined)
            return match.reduce((acc, [s, n]) => acc + n, 0);
    }


    return undefined;
}

function extendCurrentMatch(currentSet: [number, number][], options: [number, number][]): [number, number][] | undefined {
    if (currentSet.length === 6) {
        if (currentSet[0][1].toString().slice(0, 2) === currentSet[5][1].toString().slice(2))
            return currentSet;
        return undefined;
    } else {
        const lastNumber: number = currentSet[currentSet.length - 1][1];
        const lastTwoDigits: string = lastNumber.toString().slice(2);
        const nextOptions: [number, number][] = options.filter(([s, n]) => n.toString().slice(0, 2) === lastTwoDigits);
        for (let i = 0; i < nextOptions.length; i++) {
            const nextOption: [number, number] = nextOptions[i];
            const newSet: [number, number][] = [...currentSet, nextOption];
            const result: [number, number][] | undefined = extendCurrentMatch(
                newSet,
                options.filter(([s, n]) => !newSet.map(t => t[0]).includes(s) && !newSet.map(t => t[1]).includes(n))
            );
            if (result !== undefined)
                return result;
        }
        return undefined;
    }
}
