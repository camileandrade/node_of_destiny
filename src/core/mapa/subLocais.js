import { exibirConteúdoLocal } from "./interacoes.js";

export async function lidarSubLocal(subLocal) {

    if (subLocal.tipoLocal === 'estabelecimento') {
        subLocal.exibirDadosGerais();
        exibirConteúdoLocal(subLocal);
    }

}
