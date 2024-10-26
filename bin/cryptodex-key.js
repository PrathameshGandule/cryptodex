import { Command } from "commander";
const program = new Command();
import { key } from '../commands/key.js'

program
    .command('set')
    .description('Set API key -- Get api from https://www.coinapi.io/')
    .action(key.set)

program
    .command('show')
    .description('Show API key')
    .action(key.show)

program
    .command('remove')
    .description('Remove API key')
    .action(key.remove)

program.parse(process.argv);
