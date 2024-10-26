#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from 'fs';
import { resolve , dirname } from "path";
import { fileURLToPath } from "url";
const program = new Command();

// Get the directory of the current file (cryptodex.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the absolute path to package.json
const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8'));

console.log(process.argv);

program
    .version(pkg.version)
    .description(pkg.description)
    .command('key', 'Manage API key -- https://www.coinapi.io/')
    .command('check', 'Check Coin Prices Info')
    .parse(process.argv);

// console.log("Helll");
// console.log("Hello from cryptodex\nHow are you\nI am Prathamesh");
