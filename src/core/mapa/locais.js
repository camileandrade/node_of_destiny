import inquirer from 'inquirer';
import chalk from 'chalk';
import { todosLocais } from '.././../data/locais.js';
import { lidarSubLocal } from './subLocais.js';

export async function abrirMapa() {
    console.clear();
    console.log(chalk.bgBlue.black.italic('Locais'));

    const { destino } = await inquirer.prompt({
        type: 'list',
        name: 'destino',
        message: chalk.gray('Escolha um local para visitar:'),
        choices: todosLocais.map((local) => local.nome),
    });

    const localSelecionado = todosLocais.find((local) => local.nome === destino);

    console.clear();
    console.log(chalk.green(`Local selecionado: ${localSelecionado.nome}\n`));
    console.log(chalk.white(localSelecionado.descricao));

    if (localSelecionado.subLocais.length > 0) {
        const { subLocal } = await inquirer.prompt({
            type: 'list',
            name: 'subLocal',
            message: chalk.yellow('Onde você gostaria de ir?'),
            choices: localSelecionado.subLocais.map((subLocal) => subLocal.nome),
        });

        const subLocalSelecionado = localSelecionado.subLocais.find(
            (sublocal) => sublocal.nome === subLocal
        );

        lidarSubLocal(subLocalSelecionado);

    } else {
        console.log(chalk.yellow(`📍 Sua localização é: ${localSelecionado.nome}`));
    }
}
