import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { Router } from '@angular/router';
import { CompanyService } from './company.service';
import { Company } from './company';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  newQuestions: Question[] = [];
  newAnswers: Question[] = [];
  userType = window.sessionStorage.getItem('usertype');
  company: Company;
  hasStarted = false;
  showSettings = false;
  htmlContent = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };
  constructor(private companyService: CompanyService, router: Router) { }
  ngOnInit(): void {
    if (this.userType === 'Entrepreneur'){
      this.showSettings = true;
    }
    else{
      this.showSettings = false;
    }
    this.companyService.checkCompetitionStart(window.sessionStorage.getItem('competitionId')).subscribe(data => {
      this.hasStarted = data.competitionHasStarted;
    });
    const param = window.sessionStorage.getItem('userid');
    const userId: number = +param;
    this.companyService.getMyCompany(userId).subscribe(data => {
      this.company = data;
    });
    this.companyService.getQuestionsAndAnswers(userId).subscribe(data => {
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
        this.newQuestions.push(new Question ( element.id,
                                              element.questionText,
                                              element.order,
                                              element.competitionId,
                                              element.isSelected,
                                              element.responses[0].questionId,
                                              element.responses[0].companyId,
                                              element.responses[0].answerText ) );
      });
  });
    this.newAnswers = this.newQuestions;
  }
  save(compName: string, compURl: string, pitch: string): void{
    this.company.companyName = compName;
    this.company.companyWebsiteURL = compURl;
    this.company.companyShortPitch = pitch;

    this.newQuestions = this.newAnswers;
    this.companyService.updateCompany(this.company).subscribe(data => {
    });

  }
  savePitch(pitch: string): void{
    this.company.companyShortPitch = pitch;

    this.newQuestions = this.newAnswers;
    this.companyService.updateCompany(this.company).subscribe(data => {
    });

  }
  update(i: number, newTxt: string): void{
    this.newAnswers[i].answerText = newTxt;
  }
  saveAnswer(): void{
    this.newQuestions = this.newAnswers;

    this.companyService.updateAnswers(this.newQuestions).subscribe(data => {
    });
  }
}
