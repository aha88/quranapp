import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataquranService {
  langAPI:any;

  constructor( private http: HttpClient) { 
  this.langAPI = localStorage.getItem("language");
  }
  


  surahlisting() { return this.http.get('/assets/source/surah.json');}
  audiolisting() { return this.http.get('/assets/source/reciter.json');}

  surah(quranid)  { return this.http.get('/assets/source/surah/surah_'+ quranid +'.json');   }
  
  suraht(quranid)  { return this.http.get('/assets/source/translation/'+ this.langAPI +'/'+ this.langAPI +'_translation_'+ quranid +'.json'); }


}

