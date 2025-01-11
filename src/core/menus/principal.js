import inquirer from 'inquirer';
import chalk from 'chalk';
import { formatar1 } from '../../utils/formatacao.js'
import {pressioneEnter } from '../../utils/mensagens.js';
import { abrirMapa } from '../mapa/locais.js';

export async function menuPrincipal(jogador) {
    let continuarNoMenu = true;

    while (continuarNoMenu) {
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
                await abrirMapa(jogador); 
                break;

            case '🎒 Inventário':
                console.clear();
                jogador.inventario.mostrarInventario();
                await pressioneEnter();
                break;

            case '📜 Perfil':
                console.clear();
                jogador.mostrarPerfil();
                await pressioneEnter(); 
                break;

            case '🚪 Sair do jogo':
                console.clear();
                console.log(chalk.red('👋 Obrigado por jogar! Até a próxima!'));
                continuarNoMenu = false; 
                break;
        }
    }
}