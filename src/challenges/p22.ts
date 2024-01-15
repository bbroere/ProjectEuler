import {input} from "../inputs/p22";

function alphabeticalValue(s: string): number {
    return s.split("").map(c => c.charCodeAt(0) - 64).reduce((c, n) => c + n, 0);
}

export function run(): number {
    const names: string[] = input.replaceAll('"', "").split(",").sort();
    return names.reduce((c, n, i) => c + (i + 1) * alphabeticalValue(n), 0);
}