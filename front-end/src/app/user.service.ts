import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Invite } from './invite';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  status;

  getUsers():Observable<User[]> {
      return this.http.get<User[]>('/api/users/all');
    }

  getManagers():Observable<User[]> {
    return this.http.get<User[]>('/api/users/all').pipe(map(users => users.filter(user => user.userTypeId === 3)));
  }

  getManagerByCompetitionId(id: number):Observable<User> {
    return this.http.get<User>('/api/users/manager/byCompetition?competitionId=' + id);
  }

  deleteManager(id: number): void {
    this.http.delete('/api/users/manager/' + id).subscribe(() => this.status = 'Delete successful');
  }




  deleteUser(username: string): void{

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        username,
      },
    };

    this.http.delete('/api/users/', options).subscribe((s) => {
      console.log(s);
    });
  }

  /*addUser(user: User): Observable<User> {
    return this.http.post<User>(this.addUserUrl, user)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }*/

 /*getInvites():Observable<Invite[]> {
   return this.http.get<User[]>('/api/invites/all');
 }*/

  constructor(private http: HttpClient) { }
}
