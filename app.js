//importando o express
const express = require('express');
//importando o path(da o caminho dos arquivos)
const path = require('path');
//executando o express
const app = express();
//salvando o numero da porta a ser usada numa variavel
const PORT = 3000;

//funcao use, indicando para o express onde vao ficar os arquivos estaticos do projeto(importante para nao crashar o css e as imagens, o navegador pode ler como texto se nao tiver)
app.use(express.static(path.join(__dirname, "public")));
//funcao get no express(app) para enviar a view(index.html) quando a porta padrao for acessada
//(req=requisicao, res=resposta)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//funcao listen para rodar a aplicacao na porta indicada
app.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta ${PORT}`);
});