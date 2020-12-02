import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'smartxchange';

  readonly ROOT_URL = '/api';

  users: Observable<User[]>;
  newUser: Observable<User[]>;

  constructor(private http: HttpClient) {

  }

  getUsers() {
    this.users = this.http.get<User[]>(this.ROOT_URL + '/users/all');
  }




}
