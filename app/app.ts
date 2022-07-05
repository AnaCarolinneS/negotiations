import { Negociacao } from "./models/negociacao";

const negociacao = new Negociacao(new Date(), 10, 100); //data, quantidade, 100
console.log(negociacao.volume);
alert('oi');

