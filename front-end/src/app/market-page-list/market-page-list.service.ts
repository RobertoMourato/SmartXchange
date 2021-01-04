import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketPageListService {

  private url = 'http://localhost:3000';
  // private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) { }

  getCompany(companyId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/companies/getcompany' + companyId, {headers: header});
  }
  getQuestionsAndAnswers(userId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/competition/compquestion?userId=' + userId, {headers: header});
  }
  getWallet(userId: string, competitionId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/users/wallet?userId=' + userId + '&competitionId=' + competitionId, {headers: header});
  }
  getStocksOwned(userId: string, companyId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/stocks/stocksowned?companyId=' + companyId + '&userId=' + userId, {headers: header});
  }
}
