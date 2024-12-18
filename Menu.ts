import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { LivroController } from "./src/controller/LivroController";
import { LivroFisico } from "./src/model/LivroFisico";
import { LivroDigital } from "./src/model/LivroDigital";


export function main() {

    let opcao, id, preco, anoLancamento, tipo: number;
    let nome, editora, estado, formato: string;
    let genero: string;
    const tipoLivro = ['Livro Fisico', 'Livro Digital'];


    const livroController = new LivroController();
    
    //Objetos de Teste

    while (true) {

        menu();

        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            about();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Livro\n\n");

                id = readlinesync.questionInt("Digite o ID do Livro: ");
            
                nome = readlinesync.question("Digite o Nome do Livro: ");

                genero = readlinesync.question("Digite o Genero do Livro: ");

                anoLancamento = readlinesync.questionInt("Digite o Ano de Lancamento do Livro: ");
                
                editora = readlinesync.question("Digite a Editora do Livro: ");
 
                preco = readlinesync.questionFloat("Digite o Preco: ");
                
                tipo = readlinesync.keyInSelect(tipoLivro, " ", { cancel: false }) + 1;
                
                switch(tipo){
                    case 1: 
                        estado = readlinesync.question("Digite o estado do Livro (novo/seminovo): ");
                        livroController.cadastrar (new LivroFisico(livroController.gerarID(), nome, anoLancamento, genero, editora, preco, tipo, estado))
                        break;
                    case 2: 
                        formato = readlinesync.question("Digite o Formato Digital do Livro (pdf/epud): ")
                        livroController.cadastrar (new LivroFisico(livroController.gerarID(), nome, anoLancamento, genero, editora, preco, tipo, formato))
                }
                keyPress();
                break;
            case 2:
                console.log("\n\nListar todos os Livros\n\n");

                    livroController.listarTodas();

                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar Dados do Livro por ID\n\n");

                id = readlinesync.questionInt("Digite o ID do Livro: ");
                livroController.procurarPorID(id);

                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados do Livro\n\n");

                id = readlinesync.questionInt("Digite o ID do Livro: ");

                let livro = livroController.buscarNoArray(id);

                if (livro !== null) {

                    nome = readlinesync.question("Digite o Nome do Livro: ");
    
                    tipo = livro.tipo;
                    
                    anoLancamento = livro.anoLancamento;
                    
                    editora = livro.editora;
    
                    preco = readlinesync.questionFloat("Digite o preco do Livro: ");

                    genero = readlinesync.question("Digite o Genero do Livro: ");
    
                    switch (tipo) {
                        case 1:
                            estado = readlinesync.question("Digite o Estado Atual do Livro (novo/seminovo): ");
                            
                            livroController.atualizar(new LivroFisico(id, nome, anoLancamento, genero, editora, preco, tipo, estado));
    
    
                            break;
                        case 2:
                            formato = readlinesync.question("Digite o Formato Digital do Livro (pdf/epub): ");
                            
                            livroController.atualizar(new LivroDigital(id, nome, anoLancamento, genero, editora, preco, tipo, formato));
    
                            break;
                    }
    
                } else
                    console.log("Livro não encontrado!")

                keyPress();
                break;
            case 5:
                console.log("\n\nApagar um Livro\n\n");

                id = readlinesync.questionInt("Digite o ID do Livro: ");
                livroController.deletar(id);

                keyPress();
                break;

            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

function menu(): void{
    console.log(colors.bg.black, colors.fg.red)
    console.log("_________________________________________________________")
    console.log("                        Livraria Cascais                         ")
    console.log("_________________________________________________________")
    console.log("           1 - Cadastrar Livro                           ")
    console.log("           2 - Listar Todos os Livros                    ")
    console.log("           3 - Buscar Livro por ID                       ")
    console.log("           4 - Atualizar Dados do Livro                  ")
    console.log("           5 - Deletar Livro                             ")
    console.log("           0 - Sair                                      ")
    console.log("_________________________________________________________")
    console.log("Entre com a opção desejada: ", colors.reset)
}   

function about(){
    console.log(colors.bg.black, colors.fg.red)
    console.log("\n_________________________________________________________");
    console.log("\nProjeto Desenvolvido por: ");
    console.log("\nAlana Sanches Oliveira - alanasanches97@gmail.com");
    console.log("\nhttps://github.com/alanaoliv/projeto_final_bloco_01");
    console.log("\n_________________________________________________________", colors.reset)
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();