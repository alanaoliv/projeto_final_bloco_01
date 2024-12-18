import { Livro } from "./Livro";

export class LivroDigital extends Livro{

    private _formato: string;

    constructor(id: number, nome: string, genero: string, anoLancamento: number, editora: string, preco: number, tipo: number, formato: string) {
        super(id, nome, genero, anoLancamento, editora, preco, tipo);
        this._formato = formato;
    }


    public get estado(): string {
        return this._formato;
    }

    public set estado(value: string) {
        this._formato = value;
    }
    
    public visualizar(): void {
        super.visualizar();
        console.log(`\nFormato do Livro: ${this._formato}`)
    }

}