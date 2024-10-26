import { Command } from "commander";
import { check } from "../commands/check.js";
const program = new Command();

program
    .command('price')
    .description('Check prices of cryptocoins')
    .option(
        '--coin <type>', 
        'Add specific coin types in csv format...', 
        'BTC,ETH,XRP'
    )
    .option(
        '--curr <currency>', 
        'Change the currency', 
        'INR'
    )
    .action((cmd) => check.price(cmd));

program.parse(process.argv);