import inquirer from 'inquirer';
import chalk from 'chalk';
import { formatar1 } from '../../utils/formatacao.js'
import { todosLocais } from '../../data/locais.js';
import { abrirMapa } from '../mapa/locais.js';

export async function menuPrincipal(jogador) {
    console.clear();

    console.log(chalk.bgBlueBright.black.italic(`${formatar1('Menu', 30)}`));

    const { opcaoEscolhida } = await inquirer.prompt({
        type: 'list',
        name: 'opcaoEscolhida',
        message: chalk.gray.italic(`${formatar1('Escolha uma opção:', 29)}`),
        choices: ['🌎 Mapa', '🎒 Inventário', '📜 Perfil', '🚪 Sair do jogo'],
    });

    switch (opcaoEscolhida) {
        case '🌎 Mapa':
            await abrirMapa();
            break;

        case '🎒 Inventário':
            console.clear();
            jogador.inventario.mostrarInventario();
            break;

        case '📜 Perfil':
            console.clear();
            jogador.mostrarPerfil();
            break;

        case '🚪 Sair do jogo':
            console.clear();
            console.log(chalk.red('👋 Obrigado por jogar! Até a próxima!'));
            break;
    }
}