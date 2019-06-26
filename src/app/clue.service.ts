import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PexelApiService } from './pexel-api.service';


@Injectable({
  providedIn: 'root'
})
export class ClueService {
  locations = ['Paris', 'Moscow', 'Dubai', 'Beijing', 'London', 'Berlin', 'Tokyo', 'Sydney'];
  location4 = 'Detroit';
  location4redHerring = 'Cleveland';
  randomPhoto: number = Math.floor((Math.random() * 10));
  redHerring = ['Cannes', 'Sochi', 'Abu Dhabi', 'Shanghai', 'Liverpool', 'Munich', 'Kyoto', 'Perth'];
  redHerrings = [];
  wrongLocations = ['Madrid', 'Hong Kong', 'Washington, DC', 'New York', 'Dublin', 'Rome', 'Warsaw', 'Lisbon', 'Mexico City'];
  id:number = 1;
  secondCity;
  startingCity;
  thirdCity;
  loc1Clues;
  loc2Clues;
  loc3Clues;
  stolenGood;
  background1;
  background2;
  background3;

  constructor(private http: HttpClient, private router: Router, private pexelService: PexelApiService) { }

  getScores() {
    return this.http.get('http://localhost:3000/scores', { responseType: 'json'});
  }
  addScore(userAndScore) {
    console.log(userAndScore);
    return this.http.post('http://localhost:3000/scores', userAndScore, { responseType: 'json'});
  }
  getClues(nextCity) {
    return this.http.get(`http://localhost:3000/clues/${nextCity}`, { responseType: 'json'});
  }
  getStolenGoods(startingCity){
    return this.http.get(`http://localhost:3000/stolenGoods/${startingCity}`, { responseType: 'json'});
  }
  rightChoice() {
    this.id++;
    console.log(this.id);
    this.router.navigate([`/location${this.id}`]);
  }
  setLocation1() {
    const randomIndex = Math.floor(Math.random() * this.locations.length);
    this.startingCity = this.locations[randomIndex];
    this.locations.splice(randomIndex, 1);
    this.redHerrings.push(this.redHerring[randomIndex]);
    this.redHerring.splice(randomIndex, 1);
    // console.log(this.locations);
    return this.locations;
  }
  setLocation2() {
    const randomIndex = Math.floor(Math.random() * this.locations.length);
    this.secondCity = this.locations[randomIndex];
    this.locations.splice(randomIndex, 1);
    this.redHerrings.push(this.redHerring[randomIndex]);
    this.redHerring.splice(randomIndex, 1);
    // console.log(this.locations);
    return this.locations;
  }
  setLocation3() {
    const randomIndex = Math.floor(Math.random() * this.locations.length);
    this.thirdCity = this.locations[randomIndex];
    this.locations.splice(randomIndex, 1);
    this.redHerrings.push(this.redHerring[randomIndex]);
    this.redHerring.splice(randomIndex, 1);
    // console.log(this.locations);
    // console.log(this.redHerrings);
    return this.locations;
  }
setLoc1Clues() {
  this.getClues(this.secondCity).subscribe(response => {
    this.loc1Clues = response;
    this.loc1Clues.push({ flag: this.loc1Clues[1].countrycode });
    // console.log(this.clues);
  });
  this.pexelService.getLocationPhoto(this.secondCity).subscribe(response => {
    this.background2 = response[`photos`][`${this.randomPhoto}`].src.large2x;
    console.log(this.background2);
    this.loc1Clues.push({ photo: response[`photos`][`${this.randomPhoto}`].src.medium });
   });
  }
setLoc2Clues() {
  this.getClues(this.thirdCity).subscribe(response => {
    this.loc2Clues = response;
    this.loc2Clues.push({ flag: this.loc2Clues[1].countrycode });
    // console.log(this.clues);
  });
  this.pexelService.getLocationPhoto(this.thirdCity).subscribe(response => {
    this.background3 = response[`photos`][`${this.randomPhoto}`].src.large2x;
    this.loc2Clues.push({ photo: response[`photos`][`${this.randomPhoto}`].src.medium });
   });
}
setLoc3Clues() {
  this.getClues(this.location4).subscribe(response => {
    this.loc3Clues = response;
    this.loc3Clues.push({ flag: this.loc3Clues[1].countrycode });
    // console.log(this.clues);
  });
  this.pexelService.getLocationPhoto(this.location4).subscribe(response => {
    this.loc3Clues.push({ photo: response[`photos`][0].src.medium });
   });
}



}
