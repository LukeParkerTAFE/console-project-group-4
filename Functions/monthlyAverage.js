
const axios = require("axios");
const { askQuestion } = require("../Common/ConsoleFunctions");
const { indexArray } = require("../Common/ConsoleFunctions");

async function monthlyAverage() {// historical average
    let shouldLoop = true;
    while (shouldLoop) {
        console.log("")
        let userInput1 = await askQuestion("Do you know the currency index for the historical data you are looking for? Y or N ");
        switch (userInput1) {
            case "Y":
            case "y":
                await monthlyAverageY();
                shouldLoop = false;
                break;
            case "N":
            case "n":
                indexArray();
                await monthlyAverageY();
                shouldLoop = false;
                break;
        }
    }

    async function monthlyAverageY() {
        console.log();
        let currency2 = await askQuestion("What currency do you want to convert from? ");
        let currency3 = await askQuestion("What currency do you want to convert to? ");
        let userInput1 = await askQuestion("Please enter the date you wish to start from YYYY-MM-DD: ")
        let userInput2 = await askQuestion("Please enter the date you wish to finish YYYY-MM-DD: ")
        let response = await axios.get(`https://api.frankfurter.app/${userInput1}..${userInput2}?amount=1&from=${currency2}&to=${currency3}`);
        let apiArray = response.data.rates
        let api = Object.values(apiArray);
        //console.log(api);
        let valesOfEachWD = api.map(day => day[currency3.toUpperCase()])
        //console.log(valesOfEachWD);
        let total = 0
        for (let i = 0; i < valesOfEachWD.length; i++) {
            total += (valesOfEachWD[i]);
        }
        let avg = total / valesOfEachWD.length;
        console.log();
        console.log(`The average rate between ${currency2} and ${currency3} is: ${avg} between the dates ${userInput1} and ${userInput2}`)
    }

}
module.exports = {
    monthlyAverage
}
