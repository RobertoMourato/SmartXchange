import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-homepage-competition',
  templateUrl: './manager-homepage-competition.component.html',
  styleUrls: ['./manager-homepage-competition.component.css']
})
export class ManagerHomepageCompetitionComponent implements OnInit {
  participants: number;

  constructor() { }

  ngOnInit(): void {
    this.participants = 0;
  }

}
