//pega botao para modo escuro
const toggleButton = document.getElementById('toggle-mode');
//pega body inteiro da pagina
const body = document.body;

//altera o modo quando clicar no botao
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
});