//regras da negociação na Bolsa de Valores
// Não pode ser modificada depois de criada.
// Obrigatoriamente tem que ter uma data, quantidade e valor.
// Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.


export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
}


