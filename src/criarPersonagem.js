import inquirer from 'inquirer';
import chalk from 'chalk';
import { Personagem } from './class/Personagem.js';
import { Guerreiro, Mago, Arqueiro } from './class/Classe.js';

export async function criarPersonagem() {
    console.clear();

    const { nomeJogador } = await inquirer.prompt({
        type: 'input',
        name: 'nomeJogador',
        message: '👤 Qual é o seu nome, aventureiro?\n',
        validate: (input) => input ? true : '❌ O nome não pode estar vazio.',
    });

    var confirmar = false
    var classeEscolhida;

    while (!confirmar) {
        console.clear();
        const { classeJogador } = await inquirer.prompt({
            type: 'list',
            name: 'classeJogador',
            message: '\n Escolha sua classe:',
            choices: ['Guerreiro', 'Mago', 'Arqueiro'],
        });

        switch (classeJogador) {
            case 'Guerreiro':
                classeEscolhida = Guerreiro;
                break;
            case 'Mago':
                classeEscolhida = Mago;
                break;
            case 'Arqueiro':
                classeEscolhida = Arqueiro;
                break;
        }

        console.clear();
        console.log(chalk.blueBright('Você selecionou:'));
        console.log(`${classeEscolhida.mostrarDados()}`)

        const { confirmarClasse } = await inquirer.prompt({
            type: 'confirm',
            name: 'confirmarClasse',
            message: '\nDeseja confirmar essa escolha?',
            default: false,
        });

        confirmar = confirmarClasse;
    }

    const jogador = new Personagem(nomeJogador, classeEscolhida);

    console.clear();

    console.log(chalk.green('🎉 Personagem criado com sucesso!!🎉'));
    console.log(chalk.yellow(`🌟 Bem-vindo ${jogador.nome}, sua aventura começa agora!🌟`));
    
    return jogador;
}

