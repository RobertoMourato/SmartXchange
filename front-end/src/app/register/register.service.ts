import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:3000'
  //private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) { }

  register(name2:string,username2:string,email2: string, password2: string): Observable<any> {
    const body = JSON.stringify({name:name2,username:username2,email: email2, password:password2});
    console.log(body);
    const header= new HttpHeaders({ 'Content-Type': 'application/JSON' })
    return this.httpClient.post(this.url + "/register", body, {headers: header})
    .pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    console.log(res || {})
    return res || {};
  }

}
