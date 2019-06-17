import { Component, OnInit } from '@angular/core';
import { PexelApiService } from '../pexel-api.service';

@Component({
  selector: 'location3',
  templateUrl: './location3.component.html',
  styleUrls: ['./location3.component.css']
})
export class Location3Component implements OnInit {

  clueNumber = 0;
  tempClueNumber = 0;
  flight = false;
  location = 'Dubai';
  photoURL;
  randomIndex: number = Math.floor((Math.random() * 9));
  constructor(private pexelService: PexelApiService) { }
  showClue() {
    console.log(this.clueNumber);
    this.clueNumber++;
    console.log(this.clueNumber);
  }
  flyOut() {
    this.tempClueNumber = this.clueNumber;
    this.clueNumber = -1;
    this.flight = true;
  }
  goBack() {
    this.clueNumber = this.tempClueNumber;
    this.flight = !this.flight;
  }
  nextClue() {
    this.clueNumber++;
  }
  ngOnInit() {
        this.pexelService.getLocationPhoto(`${this.location}`).subscribe(response => {
      console.log(this.randomIndex);
      this.photoURL = response[`photos`][`${this.randomIndex}`].src.medium;
      console.log(this.photoURL);
      return this.photoURL;
    });
    // this.photoURL = this.pexelService.getLocationPhoto(this.location);
    // console.log(this.photoURL);
    // return this.photoURL;
    // }
  }
  }
