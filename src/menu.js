import inquirer from 'inquirer';
import chalk from 'chalk';
import { iniciarJogo } from './fluxo.js';
import { pressioneEnter } from '../utils/mensagens.js';
import { formatar1 } from '../utils/formatacao.js'

export function menuInicial() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menuIncialOp',
            message: chalk.gray.italic("                         Um RPG interativo de terminal.                            "),
            choices: [('Iniciar Jogo'), ('Sair')],
        },
    ]).then((answers) => {
        if (answers.menuIncialOp === 'Iniciar Jogo') {
            iniciarJogo(); 
        } else {
            console.log('👋 Até a próxima!');
            process.exit();
        }
    });
}

export async function menuPrincipal(jogador) {
    let jogoContinua = true;

    while (jogoContinua) {
        console.clear();

        console.log(chalk.bgBlueBright.black.italic(`${formatar1('Menu',30)}`));

        const { opcaoEscolhida } = await inquirer.prompt({
            type: 'list',
            name: 'opcaoEscolhida',
            message: chalk.gray.italic(`${formatar1('Escolha uma opção:',29)}`),
            choices: ['📜 Perfil', '🎒 Inventário', '🗺️ Mapa', '🚪 Sair do jogo'],
        }); 

        switch (opcaoEscolhida) {
            case '📜 Perfil':
                console.clear();
                jogador.mostrarPerfil(); 
                break;

            case '🎒 Inventário':
                console.clear();
                jogador.inventario.mostrarInventario();
                break;

            case '🗺️ Mapa':
                console.clear();
                console.log('Mapa: 🚧 Funcionalidade em construção...');
                break;

            case '🚪 Sair do jogo':
                console.clear();
                console.log(chalk.red('👋 Obrigado por jogar! Até a próxima!'));
                jogoContinua = false;
                break;
        }

        if (jogoContinua) {
            await pressioneEnter();
        }
    }
}