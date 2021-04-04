import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  /* @Input('agregarHijo') personajes: Personaje[] */
/*   @Output('agregarPersonaje') personaje: EventEmitter<Personaje> */
  @Input('objetoHijo') poderes: Personaje
  constructor(private dbzService: DbzService) { 
    /* this.personajes = []; */
/*     this.personaje = new EventEmitter(); */
    this.poderes = {
      nombre:"",
      poder:0
      
    }
  }

  ngOnInit(): void {
  }

  agregar(){
    if (this.poderes.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonaje(this.poderes);
    /* this.personaje.emit(this.poderes) */
    this.poderes = {nombre:'', poder:0};
  }

}
