
 const axios = require("axios");
const {currencyConverter} = require("./Functions/currencyConverter.js");
 const {ratesTable} = require("./Functions/ratesTable.js");
const { askQuestion } = require("./Common/ConsoleFunctions.js");
// const StudentMenu = require("./ConsoleMenus/StudentMenu")

async function Program() {
    // Welcome Message
    await MainMenu();
    // Thank you message
}

async function MainMenu() {
    let shouldLoop = true;
    while (shouldLoop) {
        console.log("")
        console.log("JAM's Currency Converter");
        console.log();
        console.log("[1] Currency Converter");
        console.log("[2] Rates Table");
        console.log("[3] Exit");
        console.log();
        let userInput = await askQuestion("Select an option from above: ");
        switch (userInput) {
            case "1":
                await currencyConverter();
                break;
            case "2":
            await ratesTable();
                break;
            case "3":
                shouldLoop = false;
                break;
            default:
                console.log("Error: Could not read user input. Please enter a number from 1 to 3");
        }
        }}
    


Program().then(() => {
    process.exit(0);
});