import { Component, OnInit } from '@angular/core';
import { DataquranService } from '../../dataquran.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {
  SurahSatu:any;
  menulist:Object;
  texttosearch = '';
  

  constructor(
    private quranlisting: DataquranService, 
    private loadingCtrl: LoadingController
  ){
    this.presentloading();
    
  }
 

  ngOnInit()
  { 
    this.quranlisting.audiolisting().subscribe(data => { 
      this.menulist = data['data']['audio'];
    });

  }

  speaker(po){
    localStorage.setItem('speaker', po.reciter_name.replace(/\s/g, "") );
    console.log(po);
    this.presentloading();

    window.location.reload()

  }

  getItems(event) {
   const texto = event.target.value;
   this.texttosearch = texto;
  }


  async presentloading() {
    const loader = await this.loadingCtrl.create({
      message: "Loading..",
      spinner: "bubbles",
      translucent: true,
      showBackdrop: true,
      duration: 2000,

    });
    return loader.present();
  }


  
  
}


