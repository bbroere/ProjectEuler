import {writeFileSync} from "node:fs";
import {readdirSync} from "fs";

function genProblem(n: string): void {
    if (readdirSync('challenges').includes(`p${n}.ts`)) throw new Error(`p${n}.ts already exists! Aborting...`);
    const content: string =
        '// Average runtime ~??? ms\n' +
        'export function run(): number {\n' +
        '    return undefined;\n' +
        '};';
    writeFileSync(`challenges/p${n}.ts`, content, {encoding: 'utf8'});
}

genProblem(process.argv[2]);
