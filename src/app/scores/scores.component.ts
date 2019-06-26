import { Component, OnInit } from '@angular/core';

import { ClueService } from '../clue.service';


@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  topTen;

  constructor(private clueService: ClueService) { }

  ngOnInit() {
    this.clueService.getScores().subscribe(response => {
      this.topTen = response;
      console.log(this.topTen);
     });

  }

}
