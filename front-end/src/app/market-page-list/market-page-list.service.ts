import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  getCompetition(competitionId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/competition/getCompetition?competitionId=' + competitionId, {headers: header});
  }
  changeWallet(userId:string, competitionId: string ,num: number): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put<any>(this.url + '/users/changewallet?userId=' + userId + '&competitionId=' + competitionId + '&num=' + num, {headers: header});
  }
  placeOrder(body: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post<any>(this.url + '/order/addOrder', body, {headers: header}).pipe(map(this.extractData));
  }
  getOrders(companyId: string, userId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/order/getmyorders?companyId=' + companyId + '&userId=' + userId, {headers: header});
  }
  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }
}
