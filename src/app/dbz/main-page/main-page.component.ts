import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  poderes: Personaje;

  constructor(private _dbzService: DbzService) {
    this.poderes = {
      nombre: '',
      poder: 0
    }
  }

  agregarPersonaje(event: Personaje){
    //debugger;
    this._dbzService.agregarPersonaje(event);
  }


}
