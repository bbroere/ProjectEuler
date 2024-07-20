import {champernowneConstant} from "../utilities/numbers";

export function run(): number {
    const c: string = champernowneConstant(null, 1000000).slice(2);
    return parseInt(c[0]) * parseInt(c[9]) * parseInt(c[99]) * parseInt(c[999]) * parseInt(c[9999]) * parseInt(c[99999]) * parseInt(c[999999]);
}
