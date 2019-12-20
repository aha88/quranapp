import { Component, OnInit, ViewChild } from '@angular/core';
import { DataquranService } from '../dataquran.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  category: string;

  SurahSatu:any;
  menulist = [];
  texttosearch = '';
  readquran  = localStorage.getItem("qurantheme");

  constructor(
    private quranlisting: DataquranService, 
    public navCtrl: NavController,
    private loadingCtrl: LoadingController
  ){
    this.presentloading();

    
  }

  ngOnInit()
  {   

    this.quranlisting.surahlisting().subscribe(data => { 
      this.menulist=  data['data']['allsurah'];
    });


    

  }

  getItems(event) {
   const texto = event.target.value;
   this.texttosearch = texto;
  }

  
  gotoquran(data){
    this.navCtrl.navigateForward(this.readquran);
    localStorage.setItem("readquran", data);

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


