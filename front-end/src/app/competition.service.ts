import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './game';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) {


  }

getGames(): Observable<Game[]> {
  return this.http.get<Game[]>('/api/competition/');
  }

getPlayerNamesFromGame(id: number): Observable<User[]> {
  return this.http.get<User[]>('/api/users/allByCompetition?competitionId=' + id);
}

}
