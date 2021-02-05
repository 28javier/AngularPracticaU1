import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()

export class DbzService {

    private _personajes: Personaje[] = [
        {nombre: 'Goku', poder: 1500},
        {nombre: 'Gohan', poder: 1700},
        {nombre: 'Trunk', poder: 1800},
        {nombre: 'Vegueta', poder: 1900},
      ]
    
      get personajes():Personaje[]{
          return [...this._personajes];
      }
    constructor(){
        console.log('Servicio Inicalizado');
    }

    agregarPersonajes(personaje: Personaje){
        this._personajes.push(personaje);
    }
}