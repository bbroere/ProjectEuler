import {writeFileSync} from "node:fs";
import {readdirSync} from "fs";
import * as https from "node:https";
import {IncomingMessage} from "node:http";

function genProblem(n: string): void {
    if (readdirSync('challenges').includes(`p${n}.ts`)) throw new Error(`p${n}.ts already exists! Aborting...`);
    https.get(`https://projecteuler.net/minimal=${n}`).on('response', (res: IncomingMessage) =>
        res.on('data', problem => {
            const sourcesExtended = problem.toString().replaceAll('src="', 'src="https://projecteuler.net/').replace(/\n+$/, "");
            const problemJavaDoc =
                [
                    "/**",
                    ...sourcesExtended.split("\n").map((line: string) => ` * ${line}`),
                    " *",
                    ` * <p><a href='https://projecteuler.net/problem=${n}'>Source</a></p>`,
                    " * <p><i><b>Average runtime ~??? ms</b></i></p>",
                    " */\n"
                ].join("\n");
            const content: string = problemJavaDoc +
                'export function run(): number {\n' +
                '    return undefined;\n' +
                '}\n';
            writeFileSync(`challenges/p${n}.ts`, content, {encoding: 'utf8'});
        })
    );
}

genProblem(process.argv[2]);
