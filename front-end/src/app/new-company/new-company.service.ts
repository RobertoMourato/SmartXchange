import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewCompanyService {
  private url = 'http://localhost:3000';
  // private url = 'http://localhost:5000'
  constructor(private httpClient: HttpClient) { }
  CreateNewCompany(compName: string, compUrl: string, pitch: string): Observable<any>{
    const body = JSON.stringify({playerCompetitionId: null,
                                 companyName: compName,
                                 companyWebsiteURL: compUrl,
                                 companyShortPitch: pitch,
                                 companyCurrentStockPrice: '0'});
    console.log(body);
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(this.url + '/companies/createComp', body, {headers: header})
    .pipe(map(this.extractData));
  }
  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }
}
