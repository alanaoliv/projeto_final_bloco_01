import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao, id, preco, anoLancamento: number;
    let nome, genero, editora: string;

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

                keyPress();
                break;
            case 2:
                console.log("\n\nListar todos os Livros\n\n");

                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar dados do Livro\n\n");

                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados do Livro\n\n");

                keyPress();
                break;
            case 5:
                console.log("\n\nApagar um Livro\n\n");

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