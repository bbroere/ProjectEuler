import {readdirSync} from 'fs';
import {writeFileSync} from "node:fs";

function makeRunFile(): void {
    const files: string[] = readdirSync('challenges');
    let content: string = "// THIS FILE IS AUTOMATICALLY GENERATED!\n\n";
    content += "import {solutions} from './solutions';\n";
    files.forEach((f: string): void => {
        const pr: string = f.split('.')[0];
        content += `import {run as ${pr}} from './challenges/${pr}';\n`;
    });
    content += "\n";
    const casesStrings: string[] = files.map((f: string): string => {
        const nmbr: string = f.split(".")[0].slice(1);
        return `        case ${nmbr}:\n` +
            `            return nFn(${nmbr}, p${nmbr}, silent);\n`;
    });
    content += 'function nFn(n: number, fn: () => number | bigint, silent: boolean): boolean {\n' +
        `    const s: number | bigint = fn();\n` +
        `    if (!silent) {\n` +
        `        if (solutions.has(n)) {\n` +
        `            s == solutions.get(n) ? console.log("\x1b[42m\x1b[37mCorrect\x1b[0m", s) : console.error("\x1b[41m\x1b[37mIncorrect!\x1b[0m", s);\n` +
        `        } else {\n` +
        `            console.log("\x1b[45m\x1b[33mNo solution to compare to\x1b[0m", s);\n` +
        `        }\n` +
        `    }\n` +
        `    return solutions.has(n) ? s == solutions.get(n) : undefined;\n` +
        '}\n\n';
    const allFunctionCalls: string[] = files.map((f: string): number => Number(f.split(".")[0].slice(1)))
        .sort((a: number, b: number): number => a - b)
        .map((n: number): string => {
            return `    console.log("${n}: ");\n    nFn(${n}, p${n}, false);\n`;
        });
    content += 'export function runAll(): void {\n' +
        allFunctionCalls.join("") +
        '}\n\n';
    content += 'export function runChallenge(challenge: number, silent: boolean  = false): boolean {\n' +
        '    switch (challenge) {\n' +
        casesStrings.join("") +
        '    }\n' +
        '}\n';
    writeFileSync('run.ts', content, {encoding: 'utf8'});
}

makeRunFile();
