import { criarPersonagem } from './criarPersonagem.js';
import { menuAcoes } from './menu.js';

export async function iniciarJogo() {
    const jogador = await criarPersonagem(); 
    await menuAcoes(jogador);
}
