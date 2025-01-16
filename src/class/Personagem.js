import chalk from 'chalk';
import { Inventario } from './Inventario.js';
import { formatar1 } from '../utils/formatacao.js'

export class Personagem {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe.nome;
        this.simbolo = classe.simbolo;
        this.vida = classe.vida;
        this.mana = classe.mana;
        this.combate = classe.combate;
        this.habilidades = classe.habilidades;
        this.moedas = 10;
        this.inventario = new Inventario();
    }

    dano(quantidade) {
        this.vida -= quantidade;

        if (this.vida < 0) {
            this.vida = 0;
        }

        console.log(`Você recebeu ${quantidade} pontos de dano!\n Vida restante: ${this.vida}`);

        if (this.vida == 0) {
            console.log(`Você morreu.`);
        }
    }

    cura(quantidade) {
        this.vida += quantidade;
        console.log(`Você recebeu ${quantidade} pontos de cura.\n Vida atual: ${this.vida}`);
    }

    usarMana(quantidade) {
        if (this.mana < quantidade) {
            console.log('Mana insuficiente!');
            return false;
        }
        this.mana -= quantidade;
        console.log(`Você usou ${quantidade} pontos de mana.\n Mana restante: ${this.mana}`);
        return true;
    }

    restaurarMana(quantidade) {
        this.mana += quantidade;
        console.log(`Você recuperou ${quantidade} pontos de mana.\n Mana atual: ${this.mana}`);
    }

    gastarMoedas(quantidade) {
        if (this.moedas >= quantidade) {
            this.moedas -= quantidade;
        } else {
            throw new Error('Moedas insuficientes.');
        }
    }

    ganharMoedas(quantidade) {
        this.moedas += quantidade;
    }

    mostrarPerfil() {
        console.log(chalk.bgYellow.black.italic((`\n${formatar1('Dados')}`)));
        console.log(`👤 Nome: ${this.nome}`);
        console.log(`${this.simbolo} Classe: ${this.classe}`);
        console.log(`❤️ Vida: ${this.vida}`);
        console.log(`✨ Mana: ${this.mana}`);
        console.log(`⚔️ Combate: ${this.combate}`);
        console.log(`🪙 Moedas: ${this.moedas}`);

        console.log(chalk.bgYellow.black.italic((`\n${formatar1('Habilidades')}`)));
        this.habilidades.forEach((habilidade) => {
            console.log(`${habilidade.nome}\n     Dano: ${habilidade.dano} ${habilidade.custoMana > 0 ? `\n     Custo de Mana: ${habilidade.custoMana}` : ''}`);
        });
    }
}