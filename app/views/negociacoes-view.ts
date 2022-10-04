export class NegociacoesView {
    private elemento: HTMLElement;

    constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
    };


    template(): string { //metodo template - declarar o template da minha view - tem que ser metodo
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
            </tbody>
        </table>

        `;
    }
    update(): void {
        this.elemento.innerHTML = this.template();
    }

    //metodo update - para renderizar o template, através do elmeento que eu capturei, atraves do construtor.
}
