import { Pipe, PipeTransform } from '@angular/core';
import { Surah } from './../model/surah.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(menulist: Surah[], texto: string): Surah[] {

    if(texto.length === 0) { return menulist; }

    texto==texto.toLocaleLowerCase();
    return menulist.filter( menulist => {
        return  menulist.title.toLowerCase().includes(texto);
        
      }
    );
    
  }



}
//toLowerCase().indexOf(val.toLowerCase()) > -1)