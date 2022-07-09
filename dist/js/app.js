import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
//essa parte é boa
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
