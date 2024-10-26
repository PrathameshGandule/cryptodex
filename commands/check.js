import { KeyManager } from "../lib/KeyManager.js";
import { CryptoAPI } from "../lib/CryptoAPI.js";

const check = {
    async price(cmd){
        try{
            const keyManager = new KeyManager();
            const ourapikey = keyManager.getKey();
            const api = new CryptoAPI(ourapikey);
            let defaultCoinList = cmd.coin.split(",").map(coin => coin.trim());
            let ourOutput = '';
            for(let currentCoin of defaultCoinList){
                const priceOutput = await api.getCoinPrice(currentCoin, cmd.curr);
                ourOutput += `${priceOutput}\n`;
            }
            console.log(ourOutput);
        } catch(err) {
            console.log(err.message.red);
        }
    }
}

export { check }