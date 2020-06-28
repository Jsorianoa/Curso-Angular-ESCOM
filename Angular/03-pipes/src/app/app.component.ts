import { Component } from '@angular/core';
import { registerLocaleData } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán America';
  nombre2: string = 'JorgE SORiANo';
  arreglo: number[] = [1,2,3,4,5,6,7,8,9];
  Pi:number = Math.PI;
  porcentaje:number = 0.234;
  salario:number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = 'fr';

  videoUrl: string = 'https://www.youtube.com/embed/lxYB79ANJM8'

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(()=>{
      resolve('Llego la Data');
    },4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: '1st',
      casa: 20
    }
  }
}
