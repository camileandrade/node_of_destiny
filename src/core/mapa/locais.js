import inquirer from 'inquirer';
import chalk from 'chalk';
import { todosLocais } from '.././../data/locais.js';
import { lidarSubLocal } from './subLocais.js';
import { formatar1 } from '../../utils/formatacao.js'

export async function abrirMapa() {
    let explorarLocais = true;

    while (explorarLocais) {
        console.clear();
        console.log(chalk.bgGreen.black.italic(`${formatar1('Locais', 50)}`));

        const { destino } = await inquirer.prompt({
            type: 'list',
            name: 'destino',
            message: chalk.gray.italic(`${formatar1('Onde você deseja ir?', 49)}`),
            choices: [...todosLocais.map((local) => local.nome), 'Voltar ao Menu']
        });

        if (destino === 'Voltar ao Menu') {
            explorarLocais = false;
        } else {
            const localSelecionado = todosLocais.find((local) => local.nome === destino);

            console.clear();
            console.log(chalk.green(`Local selecionado: ${localSelecionado.nome}\n`));
            console.log(chalk.white(localSelecionado.descricao));
            console.log();
    
            if (localSelecionado.subLocais.length > 0) {
                await lidarSubLocal(localSelecionado);
            } else {
                console.log(chalk.yellow(`📍 Sua localização é: ${localSelecionado.nome}`));
            }
        }
    }
}
