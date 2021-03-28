import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[];
  heroeBorrado: string;
  constructor() { 
  this.heroes = ['Spiderman', 'IronMan', 'Wanda', 'Hulk','Thor'];
  this.heroeBorrado = "";
  }

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
  

}
