import inquirer from 'inquirer';
import chalk from 'chalk';
import { todosLocais } from '.././../data/locais.js';
import { lidarSubLocal } from './subLocais.js';

export async function abrirMapa() {
    let explorarLocais = true;

    while (explorarLocais) {
        console.clear();
        console.log(chalk.bgBlue.black.italic('Locais'));

        const { destino } = await inquirer.prompt({
            type: 'list',
            name: 'destino',
            message: chalk.gray('Escolha um local para visitar:'),
            choices: [...todosLocais.map((local) => local.nome), 'Voltar ao Menu']
        });

        if (destino === 'Voltar ao Menu') {
            explorarLocais = false;
        } else {
            const localSelecionado = todosLocais.find((local) => local.nome === destino);

            console.clear();
            console.log(chalk.green(`Local selecionado: ${localSelecionado.nome}\n`));
            console.log(chalk.white(localSelecionado.descricao));
    
            if (localSelecionado.subLocais.length > 0) {
                await lidarSubLocal(localSelecionado);
            } else {
                console.log(chalk.yellow(`📍 Sua localização é: ${localSelecionado.nome}`));
            }
        }
    }
}
