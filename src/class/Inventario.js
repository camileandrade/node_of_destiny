import chalk from 'chalk';
import { formatar1 } from '../utils/formatacao.js'

export class Inventario {
    constructor() {
        this.itens = [];
    }

    addItem(item) {
        this.itens.push(item);
    }

    removerItem(nomeItem) {
        const index = this.itens.findIndex((item) => item.name === nomeItem);
        if (index >= 0) {
            this.itens.splice(index, 1);
        } else {
            console.log(`${nomeItem} não encontrado no inventário.`);
        }
    }

    mostrarInventario() {
        console.log(chalk.bgRedBright.black.italic((`\n${formatar1('Inventário')}`)));
        if (this.itens.length === 0) {
            console.log(chalk.gray.italic((`${formatar1('Inventário vazio')}`)));
        } else {
            this.itens.forEach((item, index) => {
                console.log(`${index + 1}. ${item.nome} - ${item.descricao}`);
            });
        }
    }
}