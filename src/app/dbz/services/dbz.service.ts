import { Injectable } from "@angular/core";
import { Personaje } from "src/app/interfaces/Personaje";

@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [
      {nombre:'goku',
       poder: 14000
      },
      {nombre:'vegeta',
       poder: 7500
      }
    ];
    constructor() { 

    }

    get personajes(): Personaje[]{
         return [...this._personajes];
    }

    agregarPersonaje(event: Personaje){
        //debugger;
        this._personajes.push(event);
      }

}