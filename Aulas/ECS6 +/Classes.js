class Animal {
    constructor(tipo, pernas) {
        this.tipo   = tipo;
        this.pernas = pernas;
    }

    falar(som = 'Som Qualquer') {
        return som;
    }

    get dados() {
        return `Tipo: ${this.tipo}, Pernas: ${this.pernas}`;
    }
}

export class Gato extends Animal {
    constructor(pernas, pele) {
        super('Gato', pernas);

        this.pele = pele;
    }

    falar(som = 'Miau') {
        return som;
    }

    get cor() {
        return this.pele;
    }
}

// Chamando a classe

import {Gato} from './Animal.js'

let gato = new Gato(4,'Preto');

console.log(gato.dados);