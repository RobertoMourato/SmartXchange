import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Offer } from './Offer';

@Injectable({
  providedIn: 'root',
})
export class PortfolioOrdersService {
  private url = 'http://localhost:3000';
  //private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) { }

  getPendingOrders(username: string): Observable<any> {
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient
      .get(this.url + '/order/pending/' + username, { headers: header })
      .pipe(map(this.extractData));
  }

  getCompletedOrders(username: string): Observable<any> {
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient
      .get(this.url + '/order/completed/' + username, { headers: header })
      .pipe(map(this.extractData));
  }

  getPartiallyMatchedOrders(userId: string, competitionId: string): Observable<any> {
    console.log('id and compid', userId, competitionId)
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient
      .get(this.url + '/order/partiallyMatched?userId=' + userId + '&competitionId=' + competitionId, { headers: header })
      .pipe(map(this.extractData));
  }



  cancelOrder(id: number): Observable<any> {
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient
      .put(this.url + '/order/cancel/' + id, { headers: header })
      .pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    console.log(res || {});
    return res || {};
  }
}
