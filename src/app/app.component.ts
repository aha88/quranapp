import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public menulist = [
    { title: 'Home', url: './tabs/home',  },
    { title: 'Setting', url: './setting',  },
    { title: 'Prayer Time', url: './tabs/prayertime',  },
    { title: 'Bookmark', url: '' }
  ];

  public footerlist = [
    { title: 'About', url: './about',  },
  ];
  
  long: any;
  lat: any;
  asrhr:any;
  asrmin:any;

  fajrhr:any;
  fajrmin:any;

  dhuhrhr:any;
  dhuhrmin:any;

  maghribhr:any;
  maghribmin:any;

  ishahr:any;
  ishamin:any;
  sunrisehr: any;
  sunrisemin: any;
  playStopbtn = true;

  

  address= "http://api.aladhan.com/v1/calendar?latitude="+localStorage.getItem('latitude')+"&longitude="+localStorage.getItem('longitude')+
  "&method="+localStorage.getItem('prayermethod');


  myUrlNoti= this.address;



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private geolocation: Geolocation,
    private notification: LocalNotifications,
    private alertCtrl: AlertController,
    private httpNoti: HttpClient,
    private backgroundMode: BackgroundMode

  ) {
    this.initializeApp();
    
    

    //default language
    if(localStorage.getItem("language") == null) {
      localStorage.setItem("language", 'en' );
     }

    //default prayerzone
    if(localStorage.getItem("prayermethod") == null) {
    localStorage.setItem("prayermethod", '3' );
    }
     
    //default reciter
    if(localStorage.getItem("speaker") == null) {
      localStorage.setItem("speaker", 'Alafasy' );
    }

    //default theme quran
    if(localStorage.getItem("qurantheme") == null) {
      localStorage.setItem("qurantheme", 'read-quran' );
    }


    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

      localStorage.setItem('latitude', this.lat);
      localStorage.setItem('longitude', this.long);
   
    }).catch((error) => {    });

    this.platform.ready().then(() => {
      this.notification.on('trigger').subscribe( res => {
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });
    });

    this.backgroundMode.enable();
    
  }


  
  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    var d = new Date();
    let vaf = d.getDate();
    let arrayday = vaf-1;

    this.httpNoti.get(this.myUrlNoti).subscribe(data => {
      let url_pray= data['data'][arrayday]['timings'];
        localStorage.setItem('fajrNoti', url_pray['Fajr']);
        localStorage.setItem('sunriseNoti', url_pray['Sunrise']);
        localStorage.setItem('dhuhrNoti', url_pray['Dhuhr']);
        localStorage.setItem('asrNoti', url_pray['Asr']);
        localStorage.setItem('maghribNoti', url_pray['Maghrib']);
        localStorage.setItem('ishaNoti', url_pray['Isha']);
    },error => {
        this.playStopbtn = false;
    });

  }

  showAlert(header, sub, msg){
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['ok']
    }).then(alert => alert.present());
  }


}
