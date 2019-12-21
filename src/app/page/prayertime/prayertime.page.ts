import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-prayertime',
  templateUrl: './prayertime.page.html',
  styleUrls: ['./prayertime.page.scss'],
})
export class PrayertimePage implements OnInit {
  
   address= "http://api.aladhan.com/v1/calendar?latitude="+localStorage.getItem('latitude')+"&longitude="+localStorage.getItem('longitude')+
         "&method="+localStorage.getItem('prayermethod');

  //address = "https://aladhan.com/prayer-times-api"
  
  myUrl= this.address;
                   
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

  date_gregorian: any;
  date_hijri: any;
  date_hijri_day: any;
  date_hijri_year: any;
  date_timezone:any;
  abc:any  = "20:20";
  hidedate=true;

  p0:any; 
  p1:any; 
  p2:any; 
  p3:any; 
  p4:any; 
  p5:any; 
  coorCounty: any;
  coorState: any;
  

  constructor(
    public navCtrl: NavController,
    private http:HttpClient,
    private geolocation: Geolocation,
    private platform: Platform,
    private notification: LocalNotifications,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private backgroundMode: BackgroundMode
  ) { 

    this.backgroundMode.enable();
   

    this.platform.ready().then(() => {
      this.notification.on('trigger').subscribe( res => {
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);

      });
    });

    this.timeschedule();
    this.presentloading();
    
  }



  

  ngOnInit() {
     this.deviceLocation();

    var d = new Date();
    let vaf = d.getDate();
    let arrayday = vaf-1;



    this.http.get(this.myUrl).subscribe(data => {
      let url_pray= data['data'][arrayday]['timings'];
      let datehijrimonth= data['data'][arrayday]['date']['hijri']['month'];
      let url_datereason= data['data'][arrayday]['date'];
      let url_datehijri= data['data'][arrayday]['date']['hijri'];
      let url_datetimezone= data['data'][arrayday]['meta'];

         localStorage.setItem('fajrNoti',  url_pray['Fajr']);
         localStorage.setItem('sunriseNoti', url_pray['Sunrise']);
         localStorage.setItem('dhuhrNoti',  url_pray['Dhuhr']);
         localStorage.setItem('asrNoti',  url_pray['Asr']);
         localStorage.setItem('maghribNoti',  url_pray['Maghrib']);
         localStorage.setItem('ishaNoti',  url_pray['Isha']);

  
      this.date_hijri = datehijrimonth['en'];
      this.date_hijri_day = url_datehijri['day'];
      this.date_hijri_year = url_datehijri['year'];
      this.date_timezone = url_datetimezone['timezone'];

      this.date_gregorian = url_datereason['readable'];

      
    },
    error => {
       // this.hidedate=false;

    });

  

    if(localStorage.getItem('asrNoti') != null ) {
      this.asrhr = (localStorage.getItem('asrNoti')[0] + localStorage.getItem('asrNoti')[1]);
      this.asrmin = (localStorage.getItem('asrNoti')[3] + localStorage.getItem('asrNoti')[4]);
      this.p3 =  this.asrhr +":"+  this.asrmin;
      
      this.sunrisehr = (localStorage.getItem('sunriseNoti')[0] + localStorage.getItem('sunriseNoti')[1]);
      this.sunrisemin = (localStorage.getItem('sunriseNoti')[3] + localStorage.getItem('sunriseNoti')[4]);
      this.p1 =  this.sunrisehr +":"+  this.sunrisemin;

      this.fajrhr = (localStorage.getItem('fajrNoti')[0] + localStorage.getItem('fajrNoti')[1]);
      this.fajrmin = (localStorage.getItem('fajrNoti')[3] + localStorage.getItem('fajrNoti')[4]);
      this.p0 =  this.fajrhr +":"+  this.fajrmin;

      this.dhuhrhr = (localStorage.getItem('dhuhrNoti')[0] + localStorage.getItem('dhuhrNoti')[1]);
      this.dhuhrmin = (localStorage.getItem('dhuhrNoti')[3] + localStorage.getItem('dhuhrNoti')[4]);
      this.p2 =  this.dhuhrhr +":"+  this.dhuhrmin;

      this.maghribhr = (localStorage.getItem('maghribNoti')[0] + localStorage.getItem('maghribNoti')[1]);
      this.maghribmin = (localStorage.getItem('maghribNoti')[3] + localStorage.getItem('maghribNoti')[4]);
      this.p4 =  this.maghribhr +":"+  this.maghribmin;
      
      this.ishahr = (localStorage.getItem('ishaNoti')[0] + localStorage.getItem('ishaNoti')[1]);
      this.ishamin = (localStorage.getItem('ishaNoti')[3] + localStorage.getItem('ishaNoti')[4]);
      this.p5 =  this.ishahr +":"+  this.ishamin;

    }

    
  }

  deviceLocation() {
    this.http.get('https://geoip-db.com/json/')
      .subscribe((data: any) => {
        this.coorState = data.state;
        this.coorCounty = data.country_name;
      });
  }


  getlocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     
      localStorage.setItem('latitude', this.lat);
      localStorage.setItem('longitude', this.long);
     
    }).catch((error) => { }); 
      this.presentloading();
      window.location.reload(); 
  }

  gotoqiblat() {
    this.presentloading();
    this.navCtrl.navigateForward('qiblat');
  }

  timeschedule() {
    if(localStorage.getItem('asrNoti') != null ) {
      this.asrhr = (localStorage.getItem('asrNoti')[0] + localStorage.getItem('asrNoti')[1]);
      this.asrmin = (localStorage.getItem('asrNoti')[3] + localStorage.getItem('asrNoti')[4]);
      this.p3 =  this.asrhr +":"+  this.asrmin;
      
      this.sunrisehr = (localStorage.getItem('sunriseNoti')[0] + localStorage.getItem('sunriseNoti')[1]);
      this.sunrisemin = (localStorage.getItem('sunriseNoti')[3] + localStorage.getItem('sunriseNoti')[4]);
      this.p1 =  this.sunrisehr +":"+  this.sunrisemin;

      this.fajrhr = (localStorage.getItem('fajrNoti')[0] + localStorage.getItem('fajrNoti')[1]);
      this.fajrmin = (localStorage.getItem('fajrNoti')[3] + localStorage.getItem('fajrNoti')[4]);
      this.p0 =  this.fajrhr +":"+  this.fajrmin;

      this.dhuhrhr = (localStorage.getItem('dhuhrNoti')[0] + localStorage.getItem('dhuhrNoti')[1]);
      this.dhuhrmin = (localStorage.getItem('dhuhrNoti')[3] + localStorage.getItem('dhuhrNoti')[4]);
      this.p2 =  this.dhuhrhr +":"+  this.dhuhrmin;

      this.maghribhr = (localStorage.getItem('maghribNoti')[0] + localStorage.getItem('maghribNoti')[1]);
      this.maghribmin = (localStorage.getItem('maghribNoti')[3] + localStorage.getItem('maghribNoti')[4]);
      this.p4 =  this.maghribhr +":"+  this.maghribmin;
      
      this.ishahr = (localStorage.getItem('ishaNoti')[0] + localStorage.getItem('ishaNoti')[1]);
      this.ishamin = (localStorage.getItem('ishaNoti')[3] + localStorage.getItem('ishaNoti')[4]);
      this.p5 =  this.ishahr +":"+  this.ishamin;

    }

    
    this.notification.schedule([
      {
        id:1,
        title: "Azan for Farj",
        text: "Drop everything lets pray",
        trigger: { at: new Date(new Date().setHours(this.fajrhr,this.fajrmin,0,0)) },
        foreground: true,
        sound: "file://azan2.mp3",
        smallIcon: 'res://QH-icon-v5.png',
        icon: 'file://icon/QH-icon-v5.png'
      },
      { 
        id:2,
        title: "Azan for Dhuhr",
        text: "Drop everything lets pray",
        trigger: { at: new Date(new Date().setHours(this.dhuhrhr,this.dhuhrmin,0,0)) },
        foreground: true,
        sound: "file://azan2.mp3",
        smallIcon: 'res://QH-icon-v5.png',
        icon: 'file://icon/QH-icon-v5.png'
      },
      {
        id:3,
        title: "Azan for Asr",
        text: "Drop everything lets pray",
        trigger: { at: new Date(new Date().setHours(this.asrhr,this.asrmin,0,0)) },
        foreground: true,
        sound: "file://azan2.mp3",
        smallIcon: 'res://QH-icon-v5.png',
        icon: 'file://icon/QH-icon-v5.png'
      },
      {
        id:4,
        title: "Azan for Maghrib",
        text: "Drop everything lets pray",
        trigger: { at: new Date(new Date().setHours(this.maghribhr,this.maghribmin,0,0)) },
        foreground: true,
        sound: "file://azan2.mp3",
        smallIcon: 'res://QH-icon-v5.png',
        icon: 'file://icon/QH-icon-v5.png'
      },
      {
        id:5,
        title: "Azan for Isha",
        text: "Drop everything lets pray",
        trigger: { at: new Date(new Date().setHours(this.ishahr,this.ishamin,0,0)) },
        foreground: true,
        sound: "file://azan2.mp3",
        smallIcon: 'res://QH-icon-v5.png',
        icon: 'file://icon/QH-icon-v5.png'
      }
    ])
  }

  showAlert(header, sub, msg){
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['ok']
    }).then(alert => alert.present());
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
