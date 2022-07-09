//guarda uma lista de negociacao
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //return [...this.negociacoes]  
        //spread operator - Sintaxe de Espalhamento (Spread syntax) permite que um objeto 
        //iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou 
        //mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados,
        // ou que um objeto seja expandido onde zero ou mais pares propriedade:valor 
        //(para objetos literais) são esperados.
        return this.negociacoes;
        //ReadonlyArray 
    }
}
