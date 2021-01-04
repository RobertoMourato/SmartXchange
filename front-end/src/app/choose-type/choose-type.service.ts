import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChooseTypeService {
  private url = 'http://localhost:3000';
  // private url = 'http://localhost:5000'
  constructor(private httpClient: HttpClient) { }

  completeRegistration(userType: string, playerCompetitionId: string): Observable<any>{
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(this.url + '/users/completeRegistration?userType=' + userType +
                               '&playerCompetitionId=' + playerCompetitionId, {headers: header})
                               .pipe(map(this.extractData));
  }


  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }

}
