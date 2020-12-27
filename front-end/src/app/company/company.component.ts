import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { Router } from '@angular/router';
import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  newQuestions: Question[] = []
  newAnswers: Question[] = []
  company: Company
  isShown = true
  constructor(private companyService: CompanyService, router: Router) { }
  ngOnInit(): void {
    const param = window.sessionStorage.getItem('userid')
      var userId: Number = +param
      this.companyService.getCompany(userId).subscribe(data => {
        this.company = data
      })
      this.companyService.getQuestionsAndAnswers(userId).subscribe(data => {
        data.forEach(element => {
          console.log(element)
          if(typeof element.responses[0] === 'undefined'){
            element.responses[0] = new Question(element.id,
                                                element.questionText,
                                                element.order,
                                                element.competitionId,
                                                element.isSelected,
                                                element.id,
                                                this.company.id,
                                                " ")
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
    console.log(this.newQuestions)
  }
  save(): void{
    this.newQuestions = this.newAnswers
    this.companyService.updateAnswers(this.newQuestions).subscribe(data =>{
      console.log(data)
    })
  }
  update(i: number, newTxt: string){
    this.newAnswers[i].answerText = newTxt;
  }
}
