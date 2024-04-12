const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 3000;

// Rota para somar
app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.somar(parseFloat(a), parseFloat(b));
    res.send(`Resultado da soma: ${resultado}`);
});

// Rota para subtrair
app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.subtrair(parseFloat(a), parseFloat(b));
    res.send(`Resultado da subtração: ${resultado}`);
});

// Rota para multiplicar
app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.multiplicar(parseFloat(a), parseFloat(b));
    res.send(`Resultado da multiplicação: ${resultado}`);
});

// Rota para dividir
app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.dividir(parseFloat(a), parseFloat(b));
    res.send(`Resultado da divisão: ${resultado}`);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
