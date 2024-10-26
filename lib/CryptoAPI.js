import dotenv from "dotenv";
import colors from "colors";
dotenv.config();

class CryptoAPI {
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.COINAPI_URL = "https://rest.coinapi.io/v1/exchangerate";
    }

    async getCoinPrice(coinOpt, currOpt){
        try {
            const response = await fetch(`${this.COINAPI_URL}/${coinOpt}/${currOpt}`, {
                headers: {
                    "X-CoinAPI-Key": this.API_KEY,
                },
            });
    
            // Check if the response is not OK
            if (!response.ok) {
                const errorMessage = await response.json();
                console.error(`${JSON.stringify(errorMessage.error)}`);
                return null;
            }
    
            // Parse JSON data
            const data = await response.json();
            return outputHandler(data);
    
        } catch (err) {
            console.log(`Error : ${err}`);
            return null;
        }
    }

}

function outputHandler(data){
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: data.asset_id_quote
    });
    let output = '';
    output += `Coin : ${(data.asset_id_base).yellow}`
    output += ' | ';
    output += `Price : ${formatter.format(data.rate.toString()).green}`;
    return output;
}

export { CryptoAPI }

