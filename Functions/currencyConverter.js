






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


// async function currencyConverter() {

//     //async function currencyConverter() {

//         let currency1 = await askQuestion("What currency do you want to convert? ");
//         let currency2 = await askQuestion("What currency do you want to convert to? ");
//         let moneyAmount = await askQuestion("How much currency do you want to convert? ");
//         let response = await axios.get(`https://api.frankfurter.app/latest?amount=${moneyAmount}&from=${currency1}&to=${currency2}`)

//         // let response = await axios.get(`https://api.frankfurter.app/latest?amount=${moneyAmount}&from=${currency1}`)

//         // console.log(`$${moneyAmount} of ${currency1} is ${response.data.rates} in ${currency2}`)

//         console.log(response.data)


//     }



// currencyConverter().then(() => {
//     process.exit(0);
// });

const axios = require("axios");
const { askQuestion } = require("../Common/ConsoleFunctions");

async function currencyConverter() {

    let currency1 = await askQuestion("What currency do you want to convert? ");
    let currency2 = await askQuestion("What currency do you want to convert to? ");
    let moneyAmount = await askQuestion("How much currency do you want to convert? ");
    let response = await axios.get(`https://api.frankfurter.app/latest?amount=${moneyAmount}&from=${currency1}&to=${currency2}`)
    console.log(response.data);



}
//currencyConverter();

module.exports = {
    currencyConverter
}





