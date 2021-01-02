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
  company: Company
  isShown = true
  constructor(private companyService: CompanyService, router: Router) { }
  ngOnInit(): void {
    if(!window.location.search){
      const param = window.sessionStorage.getItem('userid')
      var userId: Number = +param
      this.companyService.getMyCompany(userId).subscribe(data => {
        this.company = data
      })
      this.companyService.getQuestions(userId).subscribe(data => {
        data.forEach(element => {
          this.newQuestions.push(new Question ( element.id,
                                                element.questionText,
                                                element.order,
                                                element.competitionId,
                                                element.isSelected));
        });
      });
    }
    else{
      const param = window.location.search.split('=')[1]
      var compId: Number = +param
      this.companyService.getQuestionsByCompId(compId).subscribe(data => {
        data.forEach(element => {
          this.newQuestions.push(new Question (element.id,
                                                element.questionText,
                                                element.order,
                                                element.competitionId,
                                                element.isSelected));
        });
      });
    }
  }
}
