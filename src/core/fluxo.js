import { criarPersonagem } from './criarPersonagem.js';
import { menuPrincipal } from './menus/principal.js';

export async function iniciarJogo() {
    const jogador = await criarPersonagem(); 
    await menuPrincipal(jogador);
}