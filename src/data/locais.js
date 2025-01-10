import { Local } from '../class/Local.js'
import { pocoes } from './itens.js'

export const Guilda = new Local (
    'Guilda',
    '',
    'estabelecimento', 
    [],
    [],
    'missão'
);

export const LojaDePocoes = new Local (
    'O Caldeirão Borbulhante',
    'A Loja de Poções é um pequeno e aconchegante estabelecimento iluminado por lamparinas coloridas,\nque lançam seus reflexos em prateleiras abarrotas de livros sobre alquimia.\nFrascos de todas os tamanhos são organizados em fileiras, contendo líquidos de tons suaves a cores vibrantes.\nO aroma de ervas inunda o olfato daqueles que adentram ali e no balcão, um caldeirão está sempre fervendo\nao lado de uma jovem atendente.\n',
    'estabelecimento',
    [],
    pocoes,
    'item'
);

export const Mercador = new Local (
    'Mercador', 
    '',
    'estabelecimento',
    [],
    [],
    'item'
);

export const FabricanteDeArmas = new Local (
    '',
    '',
    'estabelecimento',
    [],
    [],
    'item'
);

export const Cidade = new Local(
    'Valeden, o Centro do Comércio',
    'Valeden é uma cidade movimentada e cheia de vida, situada no coração das Terras Centrais.\nCercada por muralhas sólidas e conhecida por sua hospitalidade, ela abriga mercados vibrantes, reunindo comerciantes \nde todas as partes do reino. Muitos são viajantes que oferecem suas mercadorias, mas outros fizeram dali sua morada.\n',
    'estabelecimento',
    [Guilda, LojaDePocoes, Mercador, FabricanteDeArmas],
    [],
    'item'
);

export const Floresta = new Local(
    'Floresta',
    '',
    'natureza',
    [],
    [],
    'item'
);

export const Montanha = new Local(
    'Montanha',
    '',
    'natureza',
    [],
    [],
    'item'
);

export const todosLocais = [Cidade, Floresta, Montanha];