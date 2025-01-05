import chalk from 'chalk';
import { formatar1, formatar2 } from '../../utils/formatacao.js'

class Classe {
    constructor(nome, descricao, vida, mana, combate, habilidades) {
        this.nome = nome;
        this.descricao = descricao;
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

export const Guerreiro = new Classe(
    'Guerreiro',
    'Um mestre do combate corpo a corpo,\nequipado com espadas e escudos. \nIdeal para enfrentar inimigos de perto.',
    150, 30, 75, [
    { nome: '🩸 Corte Brutal', dano: 25, custoMana: 0, },
    { nome: '🌀 Lâmina Giratória', dano: 50, custoMana: 25, },
]);

export const Mago = new Classe(
    'Mago',
    'Um manipulador de energias místicas,\nespecializado em lançar feitiços \ndevastadores, mas com pouca resistência\nfísica.',
    80, 150, 90, [
    { nome: '⚡️Descarga Elétrica', dano: 30, custoMana: 15, },
    { nome: '🔥 Bola de Fogo', dano: 60, custoMana: 35, },
]);

export const Arqueiro = new Classe(
    'Arqueiro',
    'Um combatente ágil, mestre em ataques\nà distância, ideal para eliminar \ninimigos sem se expor ao perigo.',
    100, 40, 50, [
    { nome: '⚡️Flecha Veloz', dano: 20, custoMana: 0, },
    { nome: '💣 Flecha Explosiva', dano: 30, custoMana: 10, },
]);


