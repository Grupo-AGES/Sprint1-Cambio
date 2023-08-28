//importando request do npm
const request = require("request");
//seleciona o input do valor dado ao cliente
let valor = document.getElementById("valor");
console.log(valor.value)
//seleciona o primeiro select de moeda do html
let coinSelect = document.getElementById("coinSelect");
//seleciona o segundo select de moeda do html
let coinInSelect = document.getElementById("coinInSelect");
//setando moedas api
const moedas = 'USD-CAD, USD-EUR, USD-BRL, USD-UYU, USD-JPY, USD-GBP, USD-CHF, USD-CNY, USD-THB, USD-VEF, CAD-USD, CAD-EUR, CAD-BRL, CAD-UYU, CAD-JPY, CAD-GBP, CAD-CHF, CAD-CNY, CAD-THB, CAD-VEF, EUR-USD, EUR-CAD, EUR-BRL, EUR-UYU, EUR-JPY, EUR-GBP, EUR-CHF, EUR-CNY, EUR-THB, EUR-VEF, BRL-USD, BRL-CAD, BRL-EUR, BRL-UYU, BRL-JPY, BRL-GBP, BRL-CHF, BRL-CNY, BRL-THB, BRL-VEF, UYU-USD, UYU-CAD, UYU-EUR, UYU-BRL, UYU-JPY, UYU-GBP, UYU-CHF, UYU-CNY, UYU-THB, UYU-VEF, JPY-USD, JPY-CAD, JPY-EUR, JPY-BRL, JPY-UYU, JPY-GBP, JPY-CHF, JPY-CNY, JPY-THB, JPY-VEF, GBP-USD, GBP-CAD, GBP-EUR, GBP-BRL, GBP-UYU, GBP-JPY, GBP-CHF, GBP-CNY, GBP-THB, GBP-VEF, CHF-USD, CHF-CAD, CHF-EUR, CHF-BRL, CHF-UYU, CHF-JPY, CHF-GBP, CHF-CNY, CHF-THB, CHF-VEF, CNY-USD, CNY-CAD, CNY-EUR, CNY-BRL, CNY-UYU, CNY-JPY, CNY-GBP, CNY-CHF, CNY-THB, CNY-VEF, THB-USD, THB-CAD, THB-EUR, THB-BRL, THB-UYU, THB-UYU, THB-JPY, THB-GBP, THB-CHF, THB-CNY, THB-VEF, VEF-USD, VEF-CAD, VEF-EUR, VEF-BRL, VEF-UYU, VEF-JPY, VEF-GBP, VEF-CHF, VEF-CNY, VEF-THB';


const options = {
    url: `https://economia.awesomeapi.com.br/json/last/${moedas}`,
    method: 'GET',
    headers:{
        'Accept':'application/json',
        'Accept-Charset':'utf-8'
    }
}

const callback_moedas = function(error, res, body){
    let json = JSON.parse(body)
    console.log(json)
}

request(options, callback_moedas)