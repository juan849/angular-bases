import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    
     get nombreCapitalizado() : string {
       return this.nombre.toUpperCase() 
    }
    
    obtenerNomre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): string {
        return this.nombre = 'Wanda';
    }

    cambiarEdad(): number{
        return this.edad = 22;
    }
}