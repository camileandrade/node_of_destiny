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
    'Um pequeno e aconchegante estabelecimento iluminado por\nlamparinas coloridas, que lançam seus reflexos em prateleiras\nabarrotadas de livros sobre alquimia.\n\nO aroma de ervas inunda o olfato daqueles que adentram ali,\ne no balcão um caldeirão está sempre fervendo ao lado de\numa jovem atendente.\n\n',
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
    'Fabricante de Armas',
    '',
    'estabelecimento',
    [],
    [],
    'item'
);

export const Cidade = new Local(
    'Valeden, o Centro do Comércio',
    'Uma cidade movimentada e cheia de vida, situada no coração das\nTerras Centrais.\n\nCercada por muralhas sólidas e conhecida por sua hospitalidade,\nela abriga mercados vibrantes, reunindo comerciantes de todas\nas partes do reino.\n\nMuitos são viajantes que oferecem suas mercadorias,\nmas outros fizeram dali sua morada.\n\n',
    'estabelecimento',
    [Guilda, LojaDePocoes, Mercador, FabricanteDeArmas],
    [],
    'item'
);

export const Borda = new Local (
    'A Borda Escarlate',
    'Há muito tempo, entre as margens de Everdeep e os Campos Além,\numa guerra feroz manchou a terra com sangue.\n\nMarcada por incontáveis mortes, a floresta em sua natureza\nviva, acolheu os últimos suspiros daqueles que ali pereceram.\n\nE tingindo as árvores de escarlate, este lugar transformou-se\nem um testemunho silencioso, uma beleza trágica que carrega\na dor e os sacrifícios de um passado sombrio.\n\n',
    'natureza',
    [],
    [],
    'item',
);

export const Vale = new Local (
    'Vale do Ouro Verde',
    'Oculto abaixo de um despinhadeiro e rodeado pela floresta densa,\né um lugar onde a natureza encontra sua forma mais vibrante.\n\nSob a vigília constante de um sol eterno, sua vegetação adquiriu\num brilho dourado único, como se os próprios raios\nde luz os abençoasse.\n\nA intensa luminosidade que banha o vale transforma cada planta\nem fragmentos de ouro vivo, guardando segredos que\napenas a luz ousa revelar.\n\n',
    'natureza',
    [],
    [],
    'item',
);

export const Pantano = new Local (
    'O Pântano Esquecido',
    'Envolto por uma densa névoa e cercado por árvores gigantescas\ncom raízes que se entrelaçam sob as águas escuras,\neste lugar pulsa uma energia antiga.\n\nO que agora é uma paisagem sombria e carregada de mistério\nfoi, outrora, um refúgio de luz e harmonia.\n\nAqueles que um dia chamavam o local de lar desapareceram,\ne as memórias dessa era dourada se tornaram apenas\nmurmúrios ao vento, apagadas das mentes dos vivos.\n\n',
    'natureza',
    [],
    [],
    'item',
);

export const CabanaDaFeiticeira = new Local (
    'A Cabana da Feiticeira',
    'Além dos pântanos esquecidos, esconde-se uma pequena cabana\nfeita de madeira envelhecida e coberta de musgo.\n\nDentro, uma feiticeira misteriosa, talvez um pouco excêntrica,\naguarda em seu refúgio por aqueles que buscam seu poder e\nsabedoria.\n\n',
    'estabelecimento',
    [],
    [],
    'item',
);

export const Floresta = new Local(
    'Everdeep, a Floresta Encantada',
    'No coração das Terras Centrais, existe vasto labirinto natural\nonde as árvores ergueram-se tão próximas que seus galhos\nentrelaçados formam um teto verde-escuro.\n\nA floresta não é apenas um lar para a natureza, é um ser\nconsciente.\n\nSuas intenções se manifestam nas trilhas que se fecham e abrem\ncomo um labirinto em constante mudança.\n\nÉ um lugar que vê, sente e decide.\n\n',
    'natureza',
    [Borda, Vale, Pantano, CabanaDaFeiticeira],
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