import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    };


    template(model: Negociacoes): string { //metodo template - declarar o template da minha view - tem que ser metodo
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>

            <tbody>
            ${model.lista().map(negociacao => {
            return `
                <tr>
                    <td> ${new Intl.DateTimeFormat()
                        .format(negociacao.data)}
                    </td>
                    <td>${negociacao.quantidade}
                    </td>
                    <td>${negociacao.valor}
                    </td>
                </tr>
                `;
        }).join('')}  
            </tbody>
        </table>
        `;
    }
    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }

    //para cada item da lista, ira fazer um map, pq o resultado tem que ser convertido numa string, para ser inserida no tbody. model.list().map

    //depois de pegar minha lista convertida em um array, onde cada elemento é uma string, torna todo mundo em uma stringzona, com o separador sendo um ''.
    //metodo update - para renderizar o template, através do elmeento que eu capturei, atraves do construtor.
}
