export const formatar1 = (texto, comprimento = 40) => {
    const textoFormatado = ` ${texto} `;
    const tamanhoPreenchimento = comprimento - textoFormatado.length;
    const preenchimento = ' '.repeat(tamanhoPreenchimento / 2);
    return `${preenchimento}${textoFormatado}${preenchimento}`;
};

export const formatar2 = (texto, comprimento = 40) => {
    const textoFormatado = ` ${texto} `;
    const tamanhoTraço = (comprimento - textoFormatado.length) / 2;
    const traços = '-'.repeat(Math.floor(tamanhoTraço));
    return `${traços}${textoFormatado}${traços}`;
};