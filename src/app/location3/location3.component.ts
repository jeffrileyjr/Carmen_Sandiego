import { Component, OnInit } from '@angular/core';
import { ClueService } from '../clue.service';
import { PexelApiService } from '../pexel-api.service';
import { ClockService } from '../clock.service';
import { UserService } from '../user.service';
@Component({
  selector: 'location3',
  templateUrl: './location3.component.html',
  styleUrls: ['./location3.component.css']
})
export class Location3Component implements OnInit {

  userName: string;
  clueNumber = -3;  // variable that is used for ngIfs to only show one pop-up message/clue at a time
  time; // for timer, hold the remaining time.
  clues;  // array to hold our clues
  tempClueNumber = 0;  // variable used in flyOut and goBack to save clue number so you can return to it from fly out page
  flight = false;  //  used to toggle flight screen or not
  nextCity = 'Detroit';  // what the next city location is
  currentCity;  // current city
  photoURL; // variable to hold URL for random background photo
  localClues;  // array to hold shuffled array of clues
  randomPhoto: number = Math.floor((Math.random() * 8));  // used to get a random index number for background photo
  redHerring; // a fake out location that is similar to the next city
  wrongLocation;  // a randomw wrong option
  timeLeft;
  locations = [];
  wrong = false;
  selectedCity;
  backgroundNoise;
  itunes = false;
  theme;
  carmenText = false;


  constructor(private userService: UserService, private clueService: ClueService, private pexelService: PexelApiService, private clockService: ClockService) { }
  playTheme() {
    this.itunes = !this.itunes;
    if (this.itunes === true ) {
      this.theme = new Audio('../../assets/Theme.mp3');
      this.theme.play();
    } else {
      this.itunes = !this.itunes;
      this.theme.pause();
    }

  }
  stopTheme() {
    this.itunes = !this.itunes;
    this.theme.pause();
  }

  showCarmenText() {
    this.clueNumber++;
    this.carmenText = !this.carmenText;
  }
  // method that increases clueNumber so we can show the next clue
  showClue() {
    this.clueNumber = 0;
    this.clockService.onClue();
    this.time = this.clockService.getTime();
    this.timeLeft = this.clockService.getTimeLeft();
    // console.log(this.clueNumber);
  }
  // this method temporarily saves the clue number when you bring up the flight screen, sets cluenumber to -1 so it doesn't show
  flyOut() {
    this.tempClueNumber = this.clueNumber;
    this.clueNumber = -1;
    this.flight = true;
  }
  // method that returns cluenumber to what it was before you click on flight screen and toggles flight back
  goBack() {
    this.clueNumber = this.tempClueNumber;
    this.flight = false;
    this.wrong = false;
  }
  goBackAirport() {
    this.wrong = !this.wrong;
    this.flight = !this.flight;
  }
  // increase clueNumber to display next clue
  nextClue() {
    this.clueNumber++;
    this.clockService.onClue();
    this.time = this.clockService.getTime();
    this.clockService.isTimeLeft();
    this.timeLeft = this.clockService.getTimeLeft();
  }
  startNoise() {
    this.backgroundNoise = new Audio(`../../assets/${this.currentCity}.mp3`);
    this.backgroundNoise.play();
  }
  stopNoise() {
  this.backgroundNoise.pause();
  console.log('stop the music');
  }
  selectLocation() {
    if (this.selectedCity !== this.nextCity) {
      this.flight = !this.flight;
      this.wrong = !this.wrong;
      this.clockService.onWrong();
      // this.clockService.isTimeLeft();
    } else {
      this.clockService.onFlight();
      this.clueService.rightChoice();
      this.stopNoise();
    }
    console.log(this.selectedCity);
  }



  ngOnInit() {
    this.currentCity = this.clueService.thirdCity;
    this.clues = this.clueService.loc3Clues;
    this.photoURL = this.clueService.background3;
    this.startNoise();
      // below is used to shuffle clues array and save it as localClues array
    let currentIndex = this.clues.length;
    while (0 !== currentIndex) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        const temporaryValue = this.clues[currentIndex];
        this.clues[currentIndex] = this.clues[randomIndex];
        this.clues[randomIndex] = temporaryValue;
        this.localClues = this.clues;
        console.log(this.localClues);
      }
      // gets the redHerring option from service then a wrong city
    this.redHerring = this.clueService.location4redHerring;
    this.wrongLocation = this.clueService.wrongLocations[Math.floor((Math.random() * 9))];
    this.locations.push(this.redHerring, this.wrongLocation, this.nextCity);
    console.log(this.locations);
    let thisIndex = 3;
    while (0 !== thisIndex) {
        const randomIndex = Math.floor(Math.random() * thisIndex);
        thisIndex -= 1;
        let tempArray = [];
        const temporaryValue = this.locations[thisIndex];
        this.locations[thisIndex] = this.locations[randomIndex];
        this.locations[randomIndex] = temporaryValue;
        tempArray = this.locations;
        this.locations = tempArray;
        console.log(this.locations);
      }
    this.time = this.clockService.getTime();
    this.timeLeft = this.clockService.getTimeLeft();
    this.userName = this.userService.userName;

    return this.localClues;
  }

}

