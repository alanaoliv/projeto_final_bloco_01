export abstract class Livro{

    //Atributos
    private _id: number;
    private _nome: string;
    private _genero: string;
    private _anoLancamento: number;
    private _editora: string;
    private _preco: number;
    private _tipo: number;


	constructor(id: number, nome: string, genero: string, anoLancamento: number, editora: string, preco: number, tipo: number) {
		this._id = id;
		this._nome = nome;
		this._genero = genero;
		this._anoLancamento = anoLancamento;
		this._editora = editora;
        this._preco = preco;
        this._tipo = tipo;
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get genero(): string {
		return this._genero;
	}

	public get anoLancamento(): number {
		return this._anoLancamento;
	}
    public get editora(): string {
		return this._editora;
	}
    public get preco(): number {
		return this._preco;
	}
    public get tipo(): number {
		return this._tipo;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set genero(value: string) {
		this._genero = value;
	}

	public set anoLancamento(value: number) {
		this._anoLancamento = value;
	}

	public set editora(value: string) {
		this._editora = value;
	}
	public set preco(value: number) {
		this._preco = value;
	}
	public set tipo(value: number) {
		this._tipo = value;
	}

    public visualizar(): void{

        let tipo: string = " ";

        switch(this._tipo){
            case 1:
                tipo = "Livro Físico";
                break;

            case 2: 
                tipo = "Livro Digital";
                break;

            default: 
                tipo = "Formato Inválido!";
                break;
        }

        console.log("_________________________________");
        console.log("           Dados do Livro       ");
        console.log("_________________________________");
        console.log(`ID do Livro: ${this._id}`)
        console.log(`Nome do Livro: ${this._nome}`)
        console.log(`Ano de Lançamento do Livro: ${this._anoLancamento}`)
        console.log(`Gênero do Livro: ${this._genero}`)
        console.log(`Editora do Livro: ${this._editora}`)
        console.log(`Preço do Livro ${this._preco.toFixed(2)}`);
        console.log(`Formato do Livro ${tipo}`);
    }
}