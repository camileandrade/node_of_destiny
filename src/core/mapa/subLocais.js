import inquirer from 'inquirer';
import chalk from 'chalk';
import { exibirConteúdoLocal } from "./interacoes.js";
import { formatar2 } from '../../utils/formatacao.js'

export async function lidarSubLocal(local) {
    let explorarSubLocais = true;

    while (explorarSubLocais) {
        console.clear();
        local.exibirDadosGerais();

        const { subLocal } = await inquirer.prompt({
            type: 'list',
            name: 'subLocal',
            message: chalk.green.italic('Escolha um local para visitar:'),
            choices: [...local.subLocais.map((sublocal) => sublocal.nome), 'Voltar ao mapa']
        });

        if (subLocal === 'Voltar ao mapa') {
            explorarSubLocais = false;
        } else {
            const subLocalSelecionado = local.subLocais.find(
                (sublocal) => sublocal.nome === subLocal
            );

            subLocalSelecionado.exibirDadosGerais();

            if (subLocalSelecionado.tipoLocal === 'estabelecimento') {

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
                        console.clear();
                        explorarSubLocais = false;
                    }
                }
            } else {
                const { entrar } = await inquirer.prompt({
                    type: 'confirm',
                    name: 'entrar',
                    message: chalk.green('Deseja ir para esse local?'),
                });

                if (entrar) {
                    console.log('Indo para o local...')
                }
            }
        }
    }
}
