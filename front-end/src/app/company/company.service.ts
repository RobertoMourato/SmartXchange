import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = 'http://localhost:3000';
  // private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) { }

  getQuestions(userId: Number): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/competition/compquestion?userId=' + userId, {headers: header});
  }
  getQuestionsByCompId(compId: Number): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/competition/compquestionById?compId=' + compId, {headers: header});
  }
  getCompany(userId: Number): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/companies/getcompany?userId=' + userId, {headers: header});
  }
}
