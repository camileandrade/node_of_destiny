import inquirer from 'inquirer';
import chalk from 'chalk';
import { exibirConteúdoLocal } from "./interacoes.js";

export async function lidarSubLocal(local) {
    let explorarSubLocais = true;

    while (explorarSubLocais) {
        console.clear()
        const { subLocal } = await inquirer.prompt({
            type: 'list',
            name: 'subLocal',
            message: chalk.yellow('Onde você gostaria de ir?'),
            choices: [...local.subLocais.map((sublocal) => sublocal.nome), 'Voltar ao mapa']
        });

        if (subLocal === 'Voltar ao mapa') {
            explorarSubLocais = false;
        } else {
            const subLocalSelecionado = local.subLocais.find(
                (sublocal) => sublocal.nome === subLocal
            );

            if (subLocalSelecionado.tipoLocal === 'estabelecimento') {
                subLocalSelecionado.exibirDadosGerais();

                const { entrar } = await inquirer.prompt({
                    type: 'confirm',
                    name: 'entrar',
                    message: chalk.green('Deseja entrar nesse estabelecimento?'),
                });

                if (entrar) {
                    await exibirConteúdoLocal(subLocalSelecionado);

                    const { continuar } = await inquirer.prompt({
                        type: 'confirm',
                        name: 'continuar',
                        message: chalk.gray('Deseja explorar outro sublocal?'),
                        default: true,
                    });

                    if (!continuar) {
                        explorarSubLocais = false;
                    }
                }
            }
        }
    }
}
