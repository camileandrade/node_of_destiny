import inquirer from 'inquirer';
import chalk from 'chalk';

export async function exibirConteúdoLocal(local) {
    if (local.tipoConteudo === 'item') {

        const { itemSelecionado } = await inquirer.prompt({
            type: 'list',
            name: 'itemSelecionado',
            message: chalk.gray.italic('Selecione um item:'),
            choices: local.conteudo.map((item) => item.nome),
        });
    
        const item = local.conteudo.find((item) => item.nome === itemSelecionado);
    
        console.clear();
        console.log(chalk.green(`Item Selecionado: ${item.nome}\n`));
        console.log(chalk.white(item.descricao));
        console.log(chalk.blue(`Preço: ${item.valor} de ouro\n`));
    }
}