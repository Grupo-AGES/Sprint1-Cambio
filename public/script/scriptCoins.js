// Seleciona o input do valor dado ao cliente
let valor = document.getElementById("valor").value;

// Seleciona o primeiro select de moeda do HTML
let coinSelect = document.getElementById("coinSelect");

// Seleciona o segundo select de moeda do HTML
let coinInSelect = document.getElementById("coinInSelect");

//pegando o valor de mudanca dos selects de moedas e criando url da api
function mudancaSelects() {
    const selectedCoin = coinSelect.value;
    const selectedCoinIn = coinInSelect.value;

    const currencyPair = `${selectedCoin}-${selectedCoinIn}`;
    const apiUrl = `https://economia.awesomeapi.com.br/json/last/${currencyPair}`;

coinSelect.addEventListener('change', mudancaSelects);
coinInSelect.addEventListener('change', mudancaSelects);

// Requisitando HTTP para usar axios
axios.get(apiUrl)
    .then(response => {
        const data = response.data;
        for (const currencyPair in data) {
            const cotacao = data[currencyPair]['bid'];
            const dia = data[currencyPair]['create_date'];
            console.log(`Currency Pair: ${currencyPair}, Cotacao: ${cotacao}, Dia: ${dia}`);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    })};
    console.log(mudancaSelects())