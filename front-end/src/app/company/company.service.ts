import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';
import { map } from 'rxjs/operators';
import { Company } from './company';
import { Competition } from '../login/competition';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  competition: Competition;
  hasStarted: boolean;
  private url = 'http://localhost:3000';
  // private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) { }

  getQuestionsAndAnswers(userId: number): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/competition/compquestion?userId=' + userId, {headers: header});
  }
  getMyCompany(userId: number): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/companies/getmycompany?userId=' + userId, {headers: header});
  }
  updateCompany(company: Company): Observable<any>{
    const body = JSON.stringify({id: company.id,
                                 playerCompetitionId: company.playerCompetitionId,
                                 companyName: company.companyName,
                                 companyWebsiteURL: company.companyWebsiteURL,
                                 companyShortPitch: company.companyShortPitch
                                });
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(this.url + '/companies/updatecompany' , body, {headers: header}).pipe(map(this.extractData));
  }
  updateAnswers(answers: Question []): Observable<any>{
    const body = {answers: []};
    answers.forEach( (answer) => {
      body.answers.push({questionId: answer.questionId,
                         companyId: answer.companyId,
                         answerText: answer.answerText});
    });
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(this.url + '/competition/answerQuestion' , body, {headers: header}).pipe(map(this.extractData));
  }
  checkCompetitionStart(competitionId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/competition/getCompetition?competitionId=' + competitionId, {headers: header});
  }
  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }
}
