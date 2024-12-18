import { Livro } from "../model/Livro";

export interface LivroRepository {

	// CRUD do Livro
	procurarPorID(id: number): void;
	listarTodos(): void;
	cadastrar(livro: Livro): void;
	atualizar(livro: Livro): void;
	deletar(id: number): void;
	
}
