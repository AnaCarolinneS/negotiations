//guarda uma lista de negociacao

import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao> {
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

