import { KeyManager } from "../lib/KeyManager.js"
import inquirer from "inquirer";
import colors from "colors";
import { isRequired } from "../utils/validation.js";

const key = {
    async set(){
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API key '.green + 'https://coinapi.io',
                validate: isRequired
            }
        ]);

        const key = keyManager.setKey(input.key);
        if(key){
            console.log("API key set".blue);
        }
    },
    show(){
        try{
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log(`Current API key ${key.green}`);
        } catch(err) {
            console.error(err.message.red);
        }
    },
    remove(){
        try{
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log(`Key Removed`.blue);
            return;
        } catch(err) {
            console.error(err.message.red);
        }    
    }
}

export { key };