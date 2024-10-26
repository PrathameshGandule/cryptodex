import Configstore from "configstore";
import { readFileSync } from 'fs';
import { resolve , dirname } from "path";
import { fileURLToPath } from "url";

// Get the directory of the current file (cryptodex.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the absolute path to package.json
const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8'));

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('ApiKey', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('ApiKey'); // Use a different name than the parameter
        if (!key) {
            throw new Error("No API key found, get one at -- https://coinapi.io");
        }
        return key;
    }

    deleteKey() {
        const key = this.conf.get('ApiKey'); // Use a different name than the parameter
        if (!key) {
            throw new Error("No API key found, get one at -- https://coinapi.io");
        }
        this.conf.delete('ApiKey');
    }
}

export { KeyManager };
