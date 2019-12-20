import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  selectcategorylanguage: any;
  selectcategoryprayer: any;
  selectthemequran:any

  constructor(
    private loadingCtrl: LoadingController
  ) { 

    this.selectcategorylanguage = localStorage.getItem("language");
    this.selectcategoryprayer = localStorage.getItem("prayermethod");
    this.selectthemequran = localStorage.getItem('qurantheme');
  }

  ngOnInit() {
  }


  // checkValue(event){ 
  //   localStorage.setItem("language", event.detail.value );
  //   window.location.reload()
  // }

  // checkValueTime(event){
  //   localStorage.setItem("prayermethod", event.detail.value );
  // }

  savesetting(){
    this.presentloading();
    localStorage.setItem("language", this.selectcategorylanguage );
    localStorage.setItem("prayermethod", this.selectcategoryprayer );
    localStorage.setItem('qurantheme', this.selectthemequran);

    window.location.reload()

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
