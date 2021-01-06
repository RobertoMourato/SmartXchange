import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Game } from '../game';
import { Observable } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CompetitionService } from '../competition.service';
import { map, mergeMap } from 'rxjs/operators';
import { flatMap } from 'rxjs/operators';
import { User } from '../user';
import { forkJoin } from 'rxjs';
import { UserService } from '../user.service';



@Component({
  selector: 'app-superadmin-games-list',
  templateUrl: './superadmin-games-list.component.html',
  styleUrls: ['./superadmin-games-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SuperadminGamesListComponent implements OnInit {



  headElements = ['ID', 'Manager ID', 'Manager Name', 'Begins In', 'Ends In', 'Status'];

  expandedElement: Game | null;

  displayedColumns: string[] = ['ID', 'Manager ID', 'Manager Name', 'Begins In', 'Ends In', 'Status'];

  readonly ROOT_URL = '/api';

  games: Observable<GameToStore[]>;

  constructor(public dialog: MatDialog, private competitionService: CompetitionService, private userService: UserService) {

  }


  ngOnInit(): void {
    this.getGames();
  }




  getGames(): void {
    this.games = this.competitionService.getGames().pipe(mergeMap(games => this.convertGameData(games)));
  }

  convertGameData(games: Game[]): Observable<GameToStore[]> {
    return forkJoin(games.map(game => this.convertToGameToStore(game)));
  }

  convertToGameToStore(game: Game): Observable<GameToStore> {

    let newStatus: string;
    const today = new Date();


    const newStartDate = new Date(game.competitionStartDate);
    const newEndDate = new Date(game.competitionEndDate);
    if (today < newStartDate) {
      newStatus = 'UPCOMING';
    }
    if (today > newStartDate && today < newEndDate) {
      newStatus = 'ONGOING';
    }
    if (today > newStartDate && today > newEndDate) {
      newStatus = 'COMPLETED';
    }

    forkJoin({ playerList: this.competitionService.getPlayerNamesFromGame(game.id).pipe(
      map((playerList: User[]) => playerList.map((player: User) => player.name))),
      managerName: this.userService.getManagerByCompetitionId(game.id).pipe(
        map((user: User) => user.name)) });

    return forkJoin({ playerList: this.competitionService.getPlayerNamesFromGame(game.id).pipe(
          map((playerList: User[]) => playerList.map((player: User) => player.name))),
          managerName: this.userService.getManagerByCompetitionId(game.id).pipe(
        map((user: User) => user.name)) }).pipe(
      map((gameInfo: {playerList: string[], managerName: string}) => ({
        id: game.id,
        managerId: game.managerId,
        competitionStartDate: game.competitionStartDate,
        competitionEndDate: game.competitionEndDate,
        competitionMarketOpening: game.competitionMarketOpening,
        competitionMarketEnding: game.competitionMarketEnding,
        competitionInitialBudget: game.competitionInitialBudget,
        competitionInitialStockValue: game.competitionInitialStockValue,
        competitionInitialRefreshRate: game.competitionInitialRefreshRate,
        competitionNumStocks: game.competitionNumStocks,
        competitionHasStarted: game.competitionHasStarted,
        status: newStatus,
        playerNames: gameInfo.playerList,
        managerName: gameInfo.managerName,
    })));
  }


  openDialog(): void {
      const dialogRef = this.dialog.open(EndGamePopupDialogComponent, {
        height: '350px',
        width: '600px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }



}

@Component({
  selector: 'app-end-game-popup-dialog',
  templateUrl: './end-game-popup-dialog.component.html',
})
  export class EndGamePopupDialogComponent {

    constructor(
      public dialogRef: MatDialogRef<EndGamePopupDialogComponent>) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

  }

interface GameToStore {
    id: number;
    managerId: number;
    competitionStartDate: Date;
    competitionEndDate: Date;
    competitionMarketOpening: string;
    competitionMarketEnding: string;
    competitionInitialBudget: number;
    competitionInitialStockValue: number;
    competitionInitialRefreshRate: number;
    competitionNumStocks: number;
    competitionHasStarted: number;
    status: string;
    playerNames: string[];
    managerName: string;
  }


