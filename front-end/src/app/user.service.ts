import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Invite } from './invite';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {



  getUsers():Observable<User[]> {
      return this.http.get<User[]>('/api/users/all');
    }

  getManagerByCompetitionId(id: number):Observable<User> {
    return this.http.get<User>('/api/users/manager/byCompetition?competitionId=' + id);
  }

 /*getInvites():Observable<Invite[]> {
   return this.http.get<User[]>('/api/invites/all');
 }*/

  constructor(private http: HttpClient) { }
}
