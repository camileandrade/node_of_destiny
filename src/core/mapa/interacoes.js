import inquirer from 'inquirer';
import chalk from 'chalk';

export async function exibirConteúdoLocal(subLocal) {
    if (subLocal.tipoConteudo === 'item') {

        const { itemSelecionado } = await inquirer.prompt({
            type: 'list',
            name: 'itemSelecionado',
            message: chalk.gray.italic('Selecione um item:'),
            choices: subLocal.conteudo.map((item) => item.nome),
        });
    
        // Encontrar o item selecionado na lista de conteudo
        const item = subLocal.conteudo.find((item) => item.nome === itemSelecionado);
    
        // Exibir as informações detalhadas do item
        console.clear();
        console.log(chalk.green(`Item Selecionado: ${item.nome}\n`));
        console.log(chalk.white(item.descricao));
        console.log(chalk.blue(`Preço: ${item.valor} de ouro\n`)); // Se houver preço
    }
}