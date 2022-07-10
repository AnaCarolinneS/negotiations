export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number) {//em typescript, o tipo da var vem depois.
    }
    //todos tem acesso, mas ngm vai poder alterar (somente leitura)
    //ngm altera por atribuição - objeto = new objeto

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
}