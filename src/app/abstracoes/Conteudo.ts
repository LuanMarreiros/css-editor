import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Conteudo {

    private opcaoLista;

    setOpcaoLista(newOpcaoLista) {
        this.opcaoLista = newOpcaoLista;
    }

    getOpcaoLista() {
        return this.opcaoLista;
    }

}