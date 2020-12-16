import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PortfolioOrdersService {
  private url = 'http://localhost:3000';
  //private url = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) {}

 /* getCompletedOrders(playerId): Observable<any> {
    return 0;
  }*/

}
