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
  newQuestions: Question[] = []
  newAnswers: Question[] = []
  company: Company
  hasStarted = false
  htmlContent = ''
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
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  constructor(private companyService: CompanyService, router: Router) { }
  ngOnInit(): void {
    //check if competition has started
    if(this.companyService.checkCompetitionStart(window.sessionStorage.getItem('competitionId'))){
      this.hasStarted = true;
      console.log("comecou")
    }
    else{
      this.hasStarted = false;
      console.log("nao comecou")
    }
    const param = window.sessionStorage.getItem('userid')
    var userId: Number = +param
    this.companyService.getCompany(userId).subscribe(data => {
      this.company = data
    })
    this.companyService.getQuestionsAndAnswers(userId).subscribe(data => {
      data.forEach(element => {
        if(typeof element.responses[0] === 'undefined'){
          element.responses[0] = new Question(element.id,
                                              element.questionText,
                                              element.order,
                                              element.competitionId,
                                              element.isSelected,
                                              element.id,
                                              this.company.id,
                                              "")
        }
        this.newQuestions.push(new Question ( element.id,
                                              element.questionText,
                                              element.order,
                                              element.competitionId,
                                              element.isSelected,
                                              element.responses[0].questionId,
                                              element.responses[0].companyId,
                                              element.responses[0].answerText));        
    });
  });
  this.newAnswers = this.newQuestions
  }
  save(compName:string, compURl: string, pitch: string): void{
    this.company.companyName = compName
    this.company.companyWebsiteURL = compURl
    this.company.companyShortPitch = pitch

    this.newQuestions = this.newAnswers
    this.companyService.updateCompany(this.company).subscribe(data =>{
    })

  }
  savePitch(pitch: string): void{
    this.company.companyShortPitch = pitch

    this.newQuestions = this.newAnswers
    this.companyService.updateCompany(this.company).subscribe(data =>{
    })

  }
  update(i: number, newTxt: string){
    this.newAnswers[i].answerText = newTxt;
  }
  saveAnswer(){
    this.newQuestions = this.newAnswers

    this.companyService.updateAnswers(this.newQuestions).subscribe(data =>{
    })
  }
}
