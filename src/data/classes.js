import { Classe } from '../class/Classe.js'

export const Guerreiro = new Classe(
    'Guerreiro',
    'Um mestre do combate corpo a corpo,\nequipado com espadas e escudos. \nIdeal para enfrentar inimigos de perto.',
    '🗡 ',
    150, 30, 75, [
    { nome: '🩸 Corte Brutal', dano: 25, custoMana: 0, },
    { nome: '🌀 Lâmina Giratória', dano: 50, custoMana: 25, },
]);

export const Mago = new Classe(
    'Mago',
    'Um manipulador de energias místicas,\nespecializado em lançar feitiços \ndevastadores, mas com pouca resistência\nfísica.',
    '🔮',
    80, 150, 90, [
    { nome: '⚡️Descarga Elétrica', dano: 30, custoMana: 15, },
    { nome: '🔥 Bola de Fogo', dano: 60, custoMana: 35, },
]);

export const Arqueiro = new Classe(
    'Arqueiro',
    'Um combatente ágil, mestre em ataques\nà distância, ideal para eliminar \ninimigos sem se expor ao perigo.',
    '🏹',
    100, 40, 50, [
    { nome: '⚡️Flecha Veloz', dano: 20, custoMana: 0, },
    { nome: '💣 Flecha Explosiva', dano: 30, custoMana: 10, },
]);
