import inquirer from 'inquirer';
import chalk from 'chalk';
import { iniciarJogo } from './fluxo.js';

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

export async function menuAcoes(jogador) {
    let jogoContinua = true;

    while (jogoContinua) {
        console.clear();

        const { acaoSelecionada } = await inquirer.prompt({
            type: 'list',
            name: 'acaoSelecionada',
            message: 'Escolha uma ação:',
            choices: ['📜 Perfil', '🎒 Inventário', '🗺️ Mapa', '🚪 Sair do jogo'],
        });

        switch (acaoSelecionada) {
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
            await inquirer.prompt({
                type: 'input',
                name: 'continuar',
                message: chalk.gray('\nPressione Enter para continuar...'),
            });
        }
    }
}