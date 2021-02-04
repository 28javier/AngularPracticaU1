import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroComponent{
    nombre: string = 'Heores';
    edad  : number = 50;    

    get nombreCapitalizado(): string{
       return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void{
        this.nombre = 'Espaiderman';
    }

    cambiarEdad():void{
        this.edad = 20;
    }
}
