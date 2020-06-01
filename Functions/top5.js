const axios = require("axios");

async function top5() {
    console.log();
    console.log("Top 5 Australian Dollar Exchange Rates Table");
    console.log();
    console.log(" $1 AUD is equal to")
    let response = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=AUD&to=USD,EUR,INR,CAD,GBP`)
    console.table(response.data.rates)
    console.log("CAD = Canadian Dollar");
    console.log("EUR = Euro");
    console.log("GBP = British Pound");
    console.log("INR = Indian Rupee");
    console.log("USD = United States Dollar")
}

module.exports = {
    top5
}