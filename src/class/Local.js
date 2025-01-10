import chalk from 'chalk';

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
    console.log(chalk.yellow(this.nome));
    console.log(`${this.descricao}`)
  }
}