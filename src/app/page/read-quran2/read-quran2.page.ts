import { Component, OnInit } from '@angular/core';
import { DataquranService } from '../../dataquran.service';
import { NavController, LoadingController } from '@ionic/angular';
import { AudioService } from '../../service/audio.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-read-quran2',
  templateUrl: './read-quran2.page.html',
  styleUrls: ['./read-quran2.page.scss'],
})
export class ReadQuran2Page implements OnInit {

  SurahSatu: any;
  SurahSatuT: any;

  indexing: any;
  serahall= [];  
  serahallt=[];
  count:any;
  hideout = false;
  bismillah = true;
  batverse: number;
  fontSize: number = 21;
  fontSizeT: number = 16;
  bkgh3: string = "#e0ffff";
  pageh: any;
  audio: any;
  dataaudio:any;
  fav: any;
  setfav: any;
  juz:number;

  url = "http://apidata.scallyresources.com/audio/"; 
  speaker =  localStorage.getItem('speaker')+"/";
  urlaudio: string;
  total: number;
  tot: number;
  all: any;
  playStopbtn=true;
  isTrue:any;
  isSurah: any;


  constructor(
    private dataquran: DataquranService, 
    private dataqurantranslate:DataquranService,
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private audioTr: AudioService,
    private http:HttpClient
  ){  
    this.presentloading();
   
     

  } 
  
  ionRefresh(event) {
    setTimeout(() => {
      this.batverse = parseInt(localStorage.getItem("bookmark"));
      //complete()  signify that the refreshing has completed and to close the refresher
      event.target.complete();
    },2000);
  }
 

  ngOnInit() 
  {
    var quranid = localStorage.getItem('readquran');
  
    this.dataquran.surah(quranid).subscribe(data => {
      this.SurahSatu =  data["data"]["name"];
      this.indexing =  data["data"]["index"];
      this.count = data["data"]["count"];      
      this.serahall = data["data"]["verse"];
      this.juz = data["data"]["juz"][0]['index'];
    });

    this.dataqurantranslate.suraht(quranid).subscribe(datat => {
      this.SurahSatuT =  datat["data"]["name"];
      this.serahallt = datat["data"]["verse"];
    });

    if( localStorage.getItem('readquran') == "1" || localStorage.getItem('readquran') == "9"){
        this.bismillah=false;
    };

    this.http.get('https://geoip-db.com/json/').subscribe((data: any) => { 
    },
    error => {
      this.playStopbtn=false;
    });


    if(parseInt(localStorage.getItem('bookmarkSurah')) == parseInt(localStorage.getItem('readquran'))) 
    {
      this.batverse =parseInt(localStorage.getItem("bookmark")); 
      this.isTrue = "v"+localStorage.getItem('bookmark');
    }
  }

  
  incfont()
  {
    this.fontSize = this.fontSize + 1.1;
    this.fontSizeT = this.fontSizeT + 1.1;
  }

  decfont()
  { 
    this.fontSize = this.fontSize - 1.1;
    this.fontSizeT = this.fontSizeT - 1.1;
  }
    

  closeT()
  {
    this.hideout=false;
  }

  gotonext()
  {
    this.total = parseInt(localStorage.getItem('readquran'));
    this.tot = 1;

    this.all = this.tot + this.total;

    localStorage.setItem('readquran', this.all );
    window.location.reload();
    this.presentloading();

  }

  myverse(p)
  {
    console.log(event);
    this.hideout= true;
    this.pageh = this.serahallt[p.verse-1];
    this.isTrue = p.audioID;
    this.isSurah = this.indexing;


    this.setfav = p.verse;
    this.audio = p['audioID'];
    this.dataaudio = p['url'];

    if(parseInt(localStorage.getItem("bookmark"))== p.verse && parseInt(localStorage.getItem("bookmarkSurah"))== this.indexing )
    {
      this.fav = "./../../../../assets/icon/bookmark.svg";
    }else{
      this.fav = "./../../../../assets/icon/openbook.svg";
    }
  }

  savebookmark(p)
  { 
    localStorage.setItem('bookmark', this.setfav); 
    localStorage.setItem('bookmarkSurah', this.indexing);
    this.fav = "./../../../../assets/icon/bookmark.svg";

  }


  endCount() 
  {
    this.batverse = parseInt(localStorage.getItem("bookmark"));      
    this.fav = "./../../../../assets/icon/bookmark.svg";
  }

  gobackroot()
  {
    this.presentloading();

    this.navCtrl.navigateBack('tabs/home');
  }

  soundverse($event)
  {
   this.urlaudio = this.url + this.speaker + this.dataaudio;
   
    switch(this.audio){
     //baseon audio id
      case this.audio: {
        this.audioTr.preload(this.audio,  this.urlaudio);
        this.audioTr.play(this.audio);        
        break; 
      }
    }
  }

  soundstop()
  {
    switch(this.audio){
      //baseon audio id
      case this.audio: {
        this.audioTr.stop(this.audio);
        break; 
      }
    }
  }

  async presentloading() 
  {
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
