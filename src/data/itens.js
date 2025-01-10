import { Item } from '../class/Item.js'

export const pocaoCura = new Item (
    'Poção de Cura',
    'Cura 20% da vida',
    5
)

export const pocaoMana = new Item (
    'Poção de Mana',
    'Cura 30% da mana',
    8
)

export const pocoes = [ pocaoCura, pocaoMana ];