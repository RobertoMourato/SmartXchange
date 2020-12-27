import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = 'http://localhost:3000';
  // private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) { }

  getQuestionsAndAnswers(userId: Number): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/competition/compquestion?userId=' + userId, {headers: header});
  }
  getCompany(userId: Number): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/companies/getcompany?userId=' + userId, {headers: header});
  }
  updateAnswers(answers: Question []): Observable<any>{
    const body = {answers: []};
    answers.forEach((answer) =>{
      body.answers.push({"questionId": answer.questionId,
                         "companyId": answer.companyId,
                         "answerText": answer.answerText})
    })
    console.log(body)
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(this.url + '/competition/answerQuestion' , body, {headers: header}).pipe(map(this.extractData));
  }
  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }
}