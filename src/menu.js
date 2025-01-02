import inquirer from 'inquirer';
import chalk from 'chalk';
import { criarPersonagem } from './criarPersonagem.js';

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
            criarPersonagem(); 
        } else {
            console.log('👋 Até a próxima!');
            process.exit();
        }
    });
}

