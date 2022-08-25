let minuto = 0;
let segundo = 0;
let contador;

function adicionarContagem() {
  segundo++;

  if (segundo === 60) {
    minuto++;
    segundo = 0;

    if (minuto === 60) {
      minuto = 0;
    }
  }
}

function cronometro(req, res) {
  res.send(`Tempo atual do cronômetro: ${String(minuto).padStart(2, 0)} minutos e ${String(segundo).padStart(2, 0)} segundos`);
}

function iniciar(req, res) {
  contador = setInterval(adicionarContagem, 1000);
  res.send("Cronômetro iniciado!");
}

function pausar(req, res) {
  clearInterval(contador)
  res.send("Cronômetro pausado!");
}

function continuar(req, res) {
  contador = setInterval(adicionarContagem, 1000);
  res.send("Cronômetro continuando!");
}

function zerar(req, res) {
  minuto = 0;
  segundo = 0;

  res.send("Cronômetro zerado!");
}

module.exports = { cronometro, iniciar, pausar, continuar, zerar }