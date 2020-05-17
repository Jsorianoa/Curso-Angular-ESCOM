import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    frase: any = {
        mostrar:true,
        mensaje: 'Un gran poder, conlleva una gran responsabilidad',
        autor: 'Ben Parker'
    }

    personajes: string[] = ['Spiderman','Venom','GreenGoblin','CapitanAmerica']
}