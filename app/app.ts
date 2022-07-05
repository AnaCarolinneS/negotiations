import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date()); //data, quantidade, 100
console.log(negociacao.volume);

