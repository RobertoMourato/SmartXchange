import { Component, OnInit } from '@angular/core';

import { SortQuestionsComponent, NewQuestionDialogComponent } from './sort-questions/sort-questions.component';



@Component({
  selector: 'app-new-competition',
  templateUrl: './new-competition.component.html',
  styleUrls: ['./new-competition.component.css', '../app.component.css']
})
export class NewCompetitionComponent implements OnInit {

  ngOnInit(): void {
  }

  formatLabel(value: number): string {
    const hours = Math.floor(value);
    const minutes = (value - hours) * 60;


    if (minutes === 0) {
      return hours + 'h';
    }
    else if (hours > 0) {
      return hours + 'h' + minutes;
 }
    else if (hours === 0) {
      return minutes + ' min';
 }

  }
}

