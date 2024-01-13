import * as fs from "fs";

function alphabeticalValue(s: string): number {
    return s.split("").map(c => c.charCodeAt(0) - 64).reduce((c, n) => c + n, 0);
}

export function run(): void {
    const allNames: string = fs.readFileSync('./inputs/p22.txt', 'utf-8');
    const names: string[] = allNames.replaceAll('"', "").split(",").sort();
    const score: number = names.reduce((c, n, i) => c + (i + 1) * alphabeticalValue(n), 0);
    console.log(score);
}