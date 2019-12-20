import { Component, OnInit, OnDestroy } from '@angular/core';
import {  DeviceOrientation, DeviceOrientationCompassHeading} from '@ionic-native/device-orientation/ngx';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TransformationType, Direction } from 'angular-coordinates';

@Component({
  selector: 'app-qiblat',
  templateUrl: './qiblat.page.html',
  styleUrls: ['./qiblat.page.scss'],
})
export class QiblatPage implements OnInit, OnDestroy {
  direction = Direction;
  type = TransformationType;
  compassDegree: number;
  cardinalPosition: string;
  latCoords =  localStorage.getItem('latitude');
  lngCoords =  localStorage.getItem('longitude');

  deviceSubscription: Subscription;

  constructor(
    private deviceOrientation: DeviceOrientation,
    private platform: Platform,
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.deviceCompassInfo();
     
    });
  }

  ngOnDestroy() {
    this.deviceSubscription.unsubscribe();
  }

  deviceCompassInfo() {
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => {
        this.rotateCompass(data.magneticHeading);
        this.compassDegree = Math.floor(data.magneticHeading);
        this.cardinalPosition = this.getCardinal(this.compassDegree);
      },
      (error: any) => console.log(error)
    );

    this.deviceSubscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => {
        this.rotateCompass(data.magneticHeading);
        this.compassDegree = Math.floor(data.magneticHeading);
        this.cardinalPosition = this.getCardinal(this.compassDegree);
      }
    );
  }


  rotateCompass(deg) {
    (<HTMLElement>document.querySelector('#image')).style.transform = `rotate(${-deg}deg)`;
  }

  getCardinal(angle) {
    const directions = 8;
    const degree = 360 / directions;
    angle = angle + degree / 2;

    if (angle >= 0 * degree && angle < 1 * degree) {
      return 'N';
    }
    if (angle >= 1 * degree && angle < 2 * degree) {
      return 'NE';
    }
    if (angle >= 2 * degree && angle < 3 * degree) {
      return 'E';
    }
    if (angle >= 3 * degree && angle < 4 * degree) {
      return 'SE';
    }
    if (angle >= 4 * degree && angle < 5 * degree) {
      return 'S';
    }
    if (angle >= 5 * degree && angle < 6 * degree) {
      return 'SW';
    }
    if (angle >= 6 * degree && angle < 7 * degree) {
      return 'W';
    }
    if (angle >= 7 * degree && angle < 8 * degree) {
      return 'NW';
    }

    return 'N';
  }
}
