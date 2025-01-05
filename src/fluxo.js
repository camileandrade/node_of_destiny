import { criarPersonagem } from './criarPersonagem.js';
import { menuPrincipal } from './menu.js';

export async function iniciarJogo() {
    const jogador = await criarPersonagem(); 
    await menuPrincipal(jogador);
}
