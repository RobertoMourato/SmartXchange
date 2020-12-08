import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  login(email2: string, password2: string): Observable<any> {
    const body = JSON.stringify({email: email2, password: password2});
    console.log(body);
    const header = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(this.url + '/login', body, {headers: header})
    .pipe(map(this.extractData));
  }

  private extractData(res: Response): object {
    console.log(res || {});
    return res || {};
  }

}
