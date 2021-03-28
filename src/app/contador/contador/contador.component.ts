import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es <strong>{{base}}</strong></h3>
    <button (click)="operacion(base)"> {{base}}</button>
    <h1>{{numero}}</h1>
    <button (click)="operacion(-base)">-{{base}}</button>
    `
})
export class ContadorComponent{
    title = 'bases';
    numero: number = 10;
    base: number = 5;
    
    operacion(valor: number){
       this.numero += valor;
    }
}