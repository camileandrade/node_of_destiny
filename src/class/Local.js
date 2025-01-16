import chalk from 'chalk';
import { formatar1 } from '../utils/formatacao.js'

export class Local {
  constructor(nome, descricao, tipoLocal, subLocais = [], conteudo = [], tipoConteudo) {
    this.nome = nome;
    this.descricao = descricao;
    this.tipoLocal = tipoLocal;
    this.subLocais = subLocais;
    this.conteudo = conteudo;
    this.tipoConteudo = tipoConteudo;
  }

  exibirDadosGerais() {
    console.clear();
    console.log(chalk.bgGreen.black(`${formatar1(this.nome, 64)}`));
    console.log(`${this.descricao}`)
  }
}