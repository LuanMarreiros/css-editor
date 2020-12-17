import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Conteudo {

    private currentComponent;

    setCurrentComponent(newcurrentComponent) {
        this.currentComponent = newcurrentComponent;
    }

    getcurrentComponent() {
        return this.currentComponent;
    }

}