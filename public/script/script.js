//seleciona o input do valor dado ao cliente
let valor = document.getElementById("valor");
console.log(valor.value)
//seleciona o primeiro select de moeda do html
let coinSelect = document.getElementById("coinSelect");
//seleciona o segundo select de moeda do html
let coinInSelect = document.getElementById("coinInSelect");
//salva os valores selecionados no select pelo usuario para encaminhar para api
let moedasSelecionadas = coinSelect.value + "-" + coinInSelect.value;
let apiUrl = `https://economia.awesomeapi.com.br/json/last/${moedasSelecionadas}`;
console.log(apiUrl)
    // Fazer a requisição à API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
        })
        .catch(error => {
            console.error('Erro ao obter dados da API:', error);
        });

const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
       
    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    });