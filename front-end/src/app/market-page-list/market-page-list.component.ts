import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketPageListService } from './market-page-list.service';
import { Company } from './company';
import { Question } from './question';

@Component({
  selector: 'app-market-page-list',
  templateUrl: './market-page-list.component.html',
  styleUrls: ['./market-page-list.component.css']
})
export class MarketPageListComponent implements OnInit {
  company: Company
  questions: Question[] = [];
  html: HTMLElement
  constructor(private marketPageListService: MarketPageListService, router: Router) { }

  ngOnInit(): void {
    this.marketPageListService.getCompany(window.location.search).subscribe(data => {
      console.log(data)
      this.company = data
      this.StringToHTML("short-pitch",this.company.companyShortPitch)
    });
    this.marketPageListService.getQuestionsAndAnswers(window.sessionStorage.getItem("userid")).subscribe(data => {
      data.forEach( element => {
        if (typeof element.responses[0] === 'undefined'){
          element.responses[0] = new Question(element.id,
                                              element.questionText,
                                              element.order,
                                              element.competitionId,
                                              element.isSelected,
                                              element.id,
                                              this.company.id,
                                              '');
        }
        this.questions.push(new Question ( element.id,
                                              element.questionText,
                                              element.order,
                                              element.competitionId,
                                              element.isSelected,
                                              element.responses[0].questionId,
                                              element.responses[0].companyId,
                                              element.responses[0].answerText ) );
      });
    });
  }
  StringToHTML(id: string, text: string){
    var $pitch = document.getElementById(id);
      $pitch.innerHTML = text;
  }
}
