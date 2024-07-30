import {writeFileSync} from "node:fs";

function genProblem(n: string): void {
    const content: string = 'export function run(): number {' +
        '    return undefined;' +
        '};';
    writeFileSync(`challenges/p${n}.ts`, content, {encoding: 'utf8'});
}

genProblem(process.argv[2]);
