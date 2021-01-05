import { Injectable, ɵɵqueryRefresh } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  invite_player(manager: string, compId:string, emailP: string): Observable<any>{
    const body = JSON.stringify({ invitedBy: manager, email:emailP, competitionId:compId });
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient
      .post(this.url + '/users/invite', body, { headers: header })
      .pipe(map(this.extractData));
  }

  add_draft(manager_Id: string, endDate: Date, initialBudget:string, initialStock: string, refreshRate: string, numStocks:string, qs: string[]): Observable<any>{
    const body = JSON.stringify({managerId: manager_Id, competitionEndDate: endDate,
       competitionInitialBudget: initialBudget, competitionInitialStockValue: initialStock, 
       competitionRefreshRate: refreshRate, competitionNumStocks: numStocks, questions: qs  });
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient
      .post(this.url + '/competition/draft', body, { headers: header })
      .pipe(map(this.extractData));
  }

  start_competition(manager:string, id: string, startDate:Date, endDate: Date, initialBudget:string, initialStock: string, refreshRate: string, numStocks:string, qs: string[]):Observable<any> {
    const body = JSON.stringify({managerId: manager, competitionId: id, competitionStartDate: startDate, competitionEndDate: endDate, competitionMarketOpening: 0,
      competitionMarketEnding: 0, competitionInitialBudget: initialBudget, competitionInitialStockValue: initialStock,
      competitionRefreshRate: refreshRate, competitionNumStocks: numStocks, questions:qs });
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient
      .put(this.url + '/competition/startCompetition', body, { headers: header })
      .pipe(map(this.extractData));
  }

  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }

}
