import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';
import { menuInicial } from './src/core/menus/inicial.js';

console.clear();

figlet('*Node of Destiny*', (err, data) => {
    if (err) {
        console.log('Erro ao gerar o texto com Figlet.');
        console.dir(err);
        return;
    }

    const rainbow = chalkAnimation.rainbow(data);

    setTimeout(() => {
        rainbow.stop(); 
        menuInicial();
    }, 3000); 
});
