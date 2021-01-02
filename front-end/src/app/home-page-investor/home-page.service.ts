import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private url = 'http://localhost:3000';
  //private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) {}

  getPlayerCompetitiontInfo(playerId: string, competitionId: string) {}

  getPlayerRankingsData(playerId: string, competitionId: string) {
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient
      .get(
        this.url +
          '/ranking/playerCompetition?playerId=' +
          playerId +
          '&competitionId=' +
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
