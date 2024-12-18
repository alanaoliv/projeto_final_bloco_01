import { Livro } from "../model/Livro";
import { colors } from "../util/Colors";
import { LivroRepository } from "../repository/LivroRepository"


export class LivroController implements LivroRepository {
    listarTodos(): void {
        throw new Error("Method not implemented.");
    }

    listaLivros = new Array<Livro>();

    public id: number = 0;

    procurarPorID(id: number): void {
        let buscaLivro = this.buscarNoArray(id);
 
        if (buscaLivro != null) {
            buscaLivro.visualizar();
        } else
            console.log(colors.fg.red,`\nO Produto ID: ${id} não foi encontrado!`, colors.reset);
    }
    listarTodas(): void {
        this.listaLivros.forEach(livro => livro.visualizar());

        //for(let produto of this.listaLivros){
        //  produto.visualizar();
        //}
    }
    cadastrar(livro: Livro): void {
        this.listaLivros.push(livro);
        console.log("O livro foi cadastrado com sucesso!")
    }

    atualizar(livro: Livro): void {
        let buscaLivro = this.buscarNoArray(livro.id);
 
        if (buscaLivro != null) {

            this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;

            console.log(colors.fg.green, `\nO Livro com o ID ${livro.id} foi atualizado com sucesso!`, colors.reset);

        } else

            console.log(colors.fg.red, `\nO Livro com o ID ${livro.id} não foi encontrado!`, colors.reset);
 
    }
    deletar(id: number): void {
        let buscaLivro = this.buscarNoArray(id);
 
        if (buscaLivro != null) {
            this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1);
        	console.log(colors.fg.green,`\nO Livro com o ID ${id} foi apagado com sucesso!`, colors.reset);
        }else
        console.log(colors.fg.red,`\nO Livro com o ID  ${id} não foi encontrado!`, colors.reset);
    }
    
    //Métodos Auxiliares

    //Gerar ID
    public gerarID(): number {
        return ++this.id;
    }

    //Checa se um Produto existe
    public buscarNoArray(id: number): Livro | null {

        for (let livro of this.listaLivros) {
            if (livro.id === id)
                return livro;
        }

        return null;
    }
}
