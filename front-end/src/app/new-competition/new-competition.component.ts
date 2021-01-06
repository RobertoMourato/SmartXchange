import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { SortQuestionsComponent, NewQuestionDialogComponent } from './sort-questions/sort-questions.component';
import { CompetitionService } from './competition.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-competition',
  templateUrl: './new-competition.component.html',
  styleUrls: ['./new-competition.component.css', '../app.component.css']
})
export class NewCompetitionComponent implements AfterViewInit {

  @ViewChild(SortQuestionsComponent) child;

  constructor(private competitionService: CompetitionService, router: Router) {}

  competitionId: string;
  ngAfterViewInit(): void {
    const questions = this.child.questions;
  }

  invite_player(email: string): void{
    const manager = window.sessionStorage.getItem('user');
    this.competitionService.invite_player(manager, this.competitionId, email).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  add_draft(cashAmmount: string, initialValue: string, refresh: string, stocks: string): void{
    const manager = window.sessionStorage.getItem('userid');
    const endDate =  new Date();
    const initialBudget = cashAmmount;
    const initialStock = initialValue;
    const refreshRate = refresh;
    const numStocks = stocks;
    const qs = this.child.questions;
    this.competitionService.add_draft(manager, endDate, initialBudget, initialStock, refreshRate, numStocks, qs).subscribe(
      (data) => {
        console.log(data);
        this.competitionId = data.id;
      }
    );
  }

   start_competition(duration: number, cashAmmount: string, initialValue: string, refresh: string, stocks: string): void{
    const manager = window.sessionStorage.getItem('userid');
    const startDate =  new Date();
    const seconds = duration * 60 * 60;
    const endDate = new Date(startDate.getTime() + seconds);
    const initialBudget = cashAmmount;
    const initialStock = initialValue;
    const refreshRate = refresh;
    const numStocks = stocks;
    const qs = this.child.questions;
    this.competitionService.start_competition(manager, this.competitionId, startDate, endDate, initialBudget,
       initialStock, refreshRate, numStocks, qs).subscribe(
        (data) => {
          console.log(data);
        }
      );
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

