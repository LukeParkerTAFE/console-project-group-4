const axios = require("axios");
const { askQuestion } = require("../Common/ConsoleFunctions");
const { indexArray } = require("../Common/ConsoleFunctions");

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
                indexArray();
                await currencyConverterY();
                shouldLoop = false;
                break;
        }
    }
}

async function currencyConverterY() {
    console.log();
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