import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class MarketPageService {
    private url = 'http://localhost:3000';
    // private url = 'http://localhost:5000'
    constructor(private httpClient: HttpClient) { }
    GetCompanyByCompetitionId(competitionId:string): Observable<any>{
      const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
      return this.httpClient.get(this.url + '/companies/getcompanybycompetitionid?competitionId='+competitionId, {headers: header})
    }
  }