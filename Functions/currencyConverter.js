const axios = require("axios");
const { askQuestion } = require("../Common/ConsoleFunctions");

async function currencyConverterY() {

    let currency1 = await askQuestion("What currency do you want to convert from? ");
    let currency2 = await askQuestion("What currency do you want to convert to? ");
    let moneyAmount = await askQuestion("How much currency do you want to convert? ");
    let response = await axios.get(`https://api.frankfurter.app/latest?amount=${moneyAmount}&from=${currency1}&to=${currency2}`);
    console.log();
    console.log(`$${response.data.amount} of ${currency1} is equal to:`);
    console.log(response.data.rates);


}

module.exports = {
    currencyConverter
}



async function currencyConverter() {
    let shouldLoop = true;
    while (shouldLoop) {
        console.log("")
        let userInput1 = await askQuestion("Do you know the currency index that you want the exchange rates for? Y or N ");
        switch (userInput1) {
            case "Y":
            case "y":
                await currencyConverterY();
                shouldLoop = false;
                break;
            case "N":
            case "n":
                await currencyConverterN();
                shouldLoop = false;
                break;
        }
    }

}

async function currencyConverterN() {
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
    let currency1 = await askQuestion("What currency do you want to convert from? ");
    let currency2 = await askQuestion("What currency do you want to convert to? ");
    let moneyAmount = await askQuestion("How much currency do you want to convert? ");
    let response = await axios.get(`https://api.frankfurter.app/latest?amount=${moneyAmount}&from=${currency1}&to=${currency2}`);
    console.log();
    console.log(`$${response.data.amount} of ${currency1} is equal to:`);
    console.log(response.data.rates);
}

