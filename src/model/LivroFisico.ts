import { Livro } from "./Livro";

export class LivroFisico extends Livro{

    private _estado: string;

    constructor(id: number, nome: string, anoLancamento: number, genero: string, editora: string, preco: number, tipo: number, estado: string) {
        super(id, nome, genero, anoLancamento, editora, preco, tipo);
		this._estado = estado;
	}


	public get estado(): string {
		return this._estado;
	}

	public set estado(value: string) {
		this._estado = value;
	}
    
    public visualizar(): void {
        super.visualizar();
        console.log(`\nEstado do Livro: ${this._estado}`)
    }

}