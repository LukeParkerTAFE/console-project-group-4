// const axios = require("axios");
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// function askQuestion(question) {
//     let answer;

//     return new Promise((resolve, reject) => {
//         rl.question(question, (ans) => {
//             resolve(ans);
//         })
//     });
// }


// async function ratesTable() {
//     // Your Code Here...}

//     let Array = [
//         {
//             "AUD": "Australian Dollar",
//             "BGN": "Bulgarian Lev",
//             "BRL": "Brazilian Real",
//             "CAD": "Canadian Dollar",
//             "CHF": "Swiss Franc",
//             "CNY": "Chinese Renminbi Yuan",
//             "CZK": "Czech Koruna",
//             "DKK": "Danish Krone",
//             "EUR": "Euro",
//             "GBP": "British Pound",
//             "HKD": "Hong Kong Dollar",
//             "HRK": "Croatian Kuna",
//             "HUF": "Hungarian Forint",
//             "IDR": "Indonesian Rupiah",
//             "ILS": "Israeli New Sheqel",
//             "INR": "Indian Rupee",
//             "ISK": "Icelandic Króna",
//             "JPY": "Japanese Yen",
//             "KRW": "South Korean Won",
//             "MXN": "Mexican Peso",
//             "MYR": "Malaysian Ringgit",
//             "NOK": "Norwegian Krone",
//             "NZD": "New Zealand Dollar",
//             "PHP": "Philippine Peso",
//             "PLN": "Polish Złoty",
//             "RON": "Romanian Leu",
//             "RUB": "Russian Ruble",
//             "SEK": "Swedish Krona",
//             "SGD": "Singapore Dollar",
//             "THB": "Thai Baht",
//             "TRY": "Turkish Lira",
//             "USD": "United States Dollar",
//             "ZAR": "South African Rand"
//         }
//     ];

// console.log("Please find below a list of the countries that you can search the rates for");

//     console.group(Array);
//     let currency1 = await askQuestion("Please enter the corresponding index of the country: ");
//     let response = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=${currency1}`)
//     // console.log("The country you have selected to searh for is: " + currency1);
//     console.table(response.data.rates)


// }
// Program().then(() => {
//     process.exit(0);
// });

module.exports = {
    ratesTable
}
const axios = require("axios");
const { askQuestion } = require("../Common/ConsoleFunctions");
async function ratesTable() {
    // Your Code Here...}

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

    console.log("Please find below a list of the countries that you can search the rates for");
    console.group(Array);
    console.log();
    let currency1 = await askQuestion("Please enter the corresponding index of the country: ");
    let response = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=${currency1}`)
    console.table(response.data.rates)



}