import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, mostrar:boolean=false ): string {

    if (mostrar) {
      return '*'.repeat(value.length) 
    }else{
      return value
    }
  }

}
