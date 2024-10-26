# CRYPTODEX
- My simple cryptocurrencies price fetching tool
- Get FREE Market data APIKEY on [coinapi.io](https://www.coinapi.io/get-free-api-key?product_id=market-data-api)
***
### To install it on windows
```bash
git clone https://github.com/PrathameshGandule/cryptodex.git
cd cryptodex
npm i
npm install -g
cryptodex.cmd
```
- Now you can use your tool to fetch cryptocoin's prices
### To install it on Linux
```bash
git clone https://github.com/PrathameshGandule/cryptodex.git
cd cryptodex
npm i
npm link
cryptodex
```
- Now you can use it on linux based OS
***
## Commands
- `cryptodex` - to view it's description and options
    - `cryptodex key` - to view key command's description and options
        - `cryptodex key set` - to set your APIKEY
        - `cryptodex key show` - to view your APIKEY
        - `cryptodex key remove` - to remove your APIKEY
    - `cryptodex check` - to view check commands's description and options
        - `cryptodex check price` - to view price of coins (default coins : BTC,ETH,XRP and currency : INR)
        - `cryptodex check price  --coin=<your desired coins comma separated (no spaces)> --curr=<desired currency>` - to check desired coin values in desired currency 
        - Example : -
        ```bash
        cryptodex check price --coin=BTC,SOL --curr=USD
        ```
***
- Make sure to use `cryptodex.cmd` in windows instead of just `cryptodex`
- Make sure to get your own apikey from [coinapi.io](https://www.coinapi.io/)
