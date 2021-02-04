import { Component } from "@angular/core";


@Component({
    selector: 'app-listado',
    templateUrl: 'listado.component.html'

})
export class ListadoComponent{

    heroes:string []= ['Spiderman', 'Batman', 'Goku', 'Vegueta', 'SuperJavi'];
    heroeBorrado: string  = '';

    borrarHeroe(){
        // console.log('Borrando');
        this.heroeBorrado =  this.heroes.shift() || '';
        
        
        
    }
}