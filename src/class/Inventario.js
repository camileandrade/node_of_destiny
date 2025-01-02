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

    mostrarInventário() {
        console.log('=== Inventário ===');
        if (this.itens.length === 0) {
            console.log('Inventário vazio.');
        } else {
            this.itens.forEach((item, index) => {
                console.log(`${index + 1}. ${item.nome} - ${item.descricao}`);
            });
        }
    }
}
