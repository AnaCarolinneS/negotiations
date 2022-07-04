//regras da negociação na Bolsa de Valores
// Não pode ser modificada depois de criada.
// Obrigatoriamente tem que ter uma data, quantidade e valor.
// Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.

import { Negociacao } from "./models/negociacao";

const negociacao = new Negociacao(new Date(), 10, 100); //data, quantidade, 100
console.log(negociacao);
negociacao.quantidade = 1000;
console.log(negociacao);
