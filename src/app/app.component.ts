import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { slider , fader, transformer } from './route-animations';
// import { PexelApiService } from './pexel-api.service'

@Component({
  selector: 'app-root',
  animations: [ // <-- add your animations here
    // fader
    slider
    // transformer
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  // title = 'Carmen-Sandiego-FP';
  // photo: any[];
  // nextLocation: string = 'Moscow';
  // randomIndex: number = Math.floor((Math.random() * 9));

  // constructor(private pexelService: PexelApiService) { }
 
  ngOnInit() {
    // this.pexelService.getLocationPhoto(`${this.nextLocation}`).subscribe(response => {
    //   console.log(this.randomIndex);
    //   this.photo = response[`photos`][`${this.randomIndex}`].src.medium;
    //   console.log(response);
    //   return this.photo;
    // });
  }


}
