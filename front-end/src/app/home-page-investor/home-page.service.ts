import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConeColumn } from '@amcharts/amcharts4/charts';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private url = 'http://localhost:3000';
  //private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) {}

  getPlayerCompetitiontInfo(playerId: string, competitionId: string) {}

  getPlayerRankingsData(playerId: string, competitionId: string) : Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    console.log('ser', playerId,' ' , competitionId)
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

  getLatestData(competitionId: string) : Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    //console.log('competitionId', competitionId)
    return this.httpClient
      .get(
        this.url +
          '/ranking/latest?competitionId=' +
          competitionId,
        { headers: header }
      )
      .pipe(map(this.extractData));
  }

  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }
}
