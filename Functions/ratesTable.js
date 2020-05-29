module.exports = {
    ratesTable
}
const axios = require("axios");
const { askQuestion } = require("../Common/ConsoleFunctions");
async function ratesTable() {
    let shouldLoop = true;
    while (shouldLoop) {
        console.log() 
        let userInput1 = await askQuestion("Do you know the currency index for the required rates table? Y or N ");
        switch (userInput1) {
            case "Y":
            case "y":
                await ratesTableY();
                shouldLoop = false;
                break;
            case "N":
            case "n":
                await ratesTableN();
                shouldLoop = false;
                break;
        }
    }

    async function ratesTableN() {
        let Array = [
            {
                "AUD": "Australian Dollar",
                "BGN": "Bulgarian Lev",
                "BRL": "Brazilian Real",
                "CAD": "Canadian Dollar",
                "CHF": "Swiss Franc",
                "CNY": "Chinese Renminbi Yuan",
                "CZK": "Czech Koruna",
                "DKK": "Danish Krone",
                "EUR": "Euro",
                "GBP": "British Pound",
                "HKD": "Hong Kong Dollar",
                "HRK": "Croatian Kuna",
                "HUF": "Hungarian Forint",
                "IDR": "Indonesian Rupiah",
                "ILS": "Israeli New Sheqel",
                "INR": "Indian Rupee",
                "ISK": "Icelandic Króna",
                "JPY": "Japanese Yen",
                "KRW": "South Korean Won",
                "MXN": "Mexican Peso",
                "MYR": "Malaysian Ringgit",
                "NOK": "Norwegian Krone",
                "NZD": "New Zealand Dollar",
                "PHP": "Philippine Peso",
                "PLN": "Polish Złoty",
                "RON": "Romanian Leu",
                "RUB": "Russian Ruble",
                "SEK": "Swedish Krona",
                "SGD": "Singapore Dollar",
                "THB": "Thai Baht",
                "TRY": "Turkish Lira",
                "USD": "United States Dollar",
                "ZAR": "South African Rand"
            }
        ];

        console.log("Please find below the index of available countries:");
        console.log(Array);
        console.log();
        let currency1 = await askQuestion("Please enter the corresponding index of the country you would like the rates table for: ");
        let response = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=${currency1}`)
        console.log();
        console.log(` $1 ${currency1} is equal to`);
        console.table(response.data.rates)


    }
}

async function ratesTableY() {

    console.log();
    let currency1 = await askQuestion("Please enter the corresponding index of the country you would like the rates table for: ");
    let response = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=${currency1}`)
    console.log();
    console.log(` $1 ${currency1} is equal to`);
    console.table(response.data.rates)


}
