import { compile } from '../runtime-compile/compiler';
import { readFileSync } from 'fs';
import { join } from 'path';

compile(join(__dirname, 'tsconfig.json'))
const tsMain = readFileSync(join(__dirname, 'examples.ts'), 'utf-8');
const jsMain = readFileSync(join(__dirname, 'examples.js'), 'utf-8');

console.log("As Typescript:");
console.log("--------------");
console.log(tsMain);
console.log("As Javascript:");
console.log("--------------");
console.log(jsMain);
console.log();
console.log();
console.log("No more generics!");