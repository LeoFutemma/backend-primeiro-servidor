const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let index = 0;

function requisicao(req, res) {
  res.send(`É a vez de ${jogadores[index]} jogar!`);
  index++;

  if (index === jogadores.length) {
    index = 0;
  }
}

app.get('/', requisicao);
app.listen(3000);