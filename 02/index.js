const express = require('express');
const { cronometro,
  iniciar,
  pausar,
  continuar,
  zerar } = require('./funcoes-cronometro')

const app = express();

app.get('/', cronometro);
app.get('/iniciar', iniciar);
app.get('/pausar', pausar);
app.get('/continuar', continuar);
app.get('/zerar', zerar);
app.listen(8000);