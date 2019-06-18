import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClueService {

  locations = ['Paris', 'Moscow', 'Dubai', 'Detroit'];
  redHerring = ['Cannes', 'Sochi', 'Abu Dhabi', 'Cleveland'];
  wrongLocations = ['London', 'Madrid', 'Hong Kong', 'Washington, DC', 'New York', 'Dublin', 'Berlin', 'Rome', 'Warsaw'];
  id:number = 0;

  constructor(private http: HttpClient, private router: Router) { }
  getClues(nextCity) {
    return this.http.get(`http://localhost:3000/clues/${nextCity}`, { responseType: 'json'});
  }
  rightChoice() {
    this.id++;
    console.log(this.id)
    this.router.navigate([`/location${this.id}`]);
  }
}
