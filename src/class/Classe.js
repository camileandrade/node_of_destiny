import chalk from 'chalk';
import { formatar1, formatar2 } from '../utils/formatacao.js'

export class Classe {
    constructor(nome, descricao, simbolo,  vida, mana, combate, habilidades) {
        this.nome = nome;
        this.descricao = descricao;
        this.simbolo = simbolo;
        this.vida = vida;
        this.mana = mana;
        this.combate = combate;
        this.habilidades = habilidades;
    }

    mostrarDados() {
        let resultado = '';
        resultado += chalk.bgYellow.black.italic(`\n${formatar1(this.nome)}`) + '\n';
        resultado += chalk.whiteBright(this.descricao) + '\n';

        resultado += chalk.yellow(`\n${formatar2('Dados')}`) + '\n';
        resultado += `❤️ Vida: ${this.vida}\n`;
        resultado += `✨ Mana: ${this.mana}\n`;
        resultado += `⚔️ Combate: ${this.combate}\n`;

        resultado += chalk.yellow.italic(`\n${formatar2('Habilidades')}`) + '\n';
        this.habilidades.forEach((habilidade) => {
            resultado += `${habilidade.nome}\n     Dano: ${habilidade.dano} ${habilidade.custoMana > 0 ? `\n     Custo de Mana: ${habilidade.custoMana}` : ''}`
            resultado += '\n';
        });

        return resultado;
    }
}