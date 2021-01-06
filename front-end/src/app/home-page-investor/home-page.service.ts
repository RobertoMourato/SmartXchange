import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private url = 'http://localhost:3000';
  // private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) {}

  getPlayerCompetitiontInfo(playerId: string, competitionId: string): void {}

  getPlayerRankingsData(playerId: string, competitionId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    console.log('ser', playerId, ' ' , competitionId);
    return this.httpClient
      .get(
        this.url +
          '/ranking/playerAndCompetition?playerId=' +
          playerId +
          '&competitionId=' +
          competitionId,
        { headers: header }
      )
      .pipe(map(this.extractData));
  }

  getLatestData(competitionId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    // console.log('competitionId', competitionId)
    return this.httpClient
      .get(
        this.url +
          '/ranking/latest?competitionId=' +
          competitionId,
        { headers: header }
      )
      .pipe(map(this.extractData));
  }

  getWallet(userId: string, competitionId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/users/wallet?userId=' + userId + '&competitionId=' + competitionId, {headers: header});
  }

  getAllMyStocks(userId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/stocks/allstocksowned?userId=' + userId, {headers: header});
  }

  getAllMyOrders(userId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get<any>(this.url + '/order/getallmyorders?userId=' + userId, {headers: header});
  }

  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }
}
