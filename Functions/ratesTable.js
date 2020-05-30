const axios = require("axios");
const { askQuestion } = require("../Common/ConsoleFunctions");
const { indexArray } = require("../Common/ConsoleFunctions");

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
                indexArray();
                await ratesTableY();
                shouldLoop = false;
                break;
        }
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

module.exports = {
    ratesTable
}
