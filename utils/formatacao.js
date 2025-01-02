export const comprimentoFixo = 40;

export const formatar1 = (texto) => {
    const textoFormatado = ` ${texto} `;
    const tamanhoPreenchimento = comprimentoFixo - textoFormatado.length;
    const preenchimento = ' '.repeat(tamanhoPreenchimento / 2);
    return `${preenchimento}${textoFormatado}${preenchimento}`;
};

export const formatar2 = (texto) => {
    const textoFormatado = ` ${texto} `;
    const tamanhoTraço = (comprimentoFixo - textoFormatado.length) / 2;
    const traços = '-'.repeat(Math.floor(tamanhoTraço));
    return `${traços}${textoFormatado}${traços}`;
};