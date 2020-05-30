
const { currencyConverter } = require("./Functions/currencyConverter.js");
const { ratesTable } = require("./Functions/ratesTable.js");
const { askQuestion } = require("./Common/ConsoleFunctions.js");
const { monthlyAverage } = require("./Functions/monthlyAverage.js");
const { top5 } = require("./Functions/top5");


async function Program() {
    await MainMenu();
}

async function MainMenu() {
    let shouldLoop = true;
    while (shouldLoop) {
        console.log();
        console.log("JAM's Foreign Exchange Rates Caculator");
        console.log();
        console.log("[1] Exchange Currency");
        console.log("[2] Show Top 5 Australian Dollar Exchange Rates");
        console.log("[3] Exchange Rates Table");
        console.log("[4] View Exchange Rate Historical Data For Over 30 Currencies");
        console.log("[5] Exit");
        console.log();
        let userInput = await askQuestion("Select an option from above: ");
        switch (userInput) {
            case "1":
                await currencyConverter();
                break;
            case "2":
                await top5();
                break;
            case "3":
                await ratesTable(); 
                break;
            case "4":
                await monthlyAverage();
                break;
            case "5":
                shouldLoop = false;
                break;
            default:
                console.log();
                console.log("Error: input not found. Please enter a number from 1 to 5");
        }
    }
}

Program().then(() => {
    process.exit(0);
});