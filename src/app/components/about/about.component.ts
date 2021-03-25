import { Component } from '@angular/core';

@Component({
    selector: 'about-componente',
    template: `<h1>Probando componentes</h1>`
})
export class AboutComponent{
    constructor(){
        console.log("Componente cargado");
    }
}