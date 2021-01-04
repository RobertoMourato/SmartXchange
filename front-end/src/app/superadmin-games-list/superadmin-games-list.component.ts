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
import { map } from 'rxjs/operators';
import { flatMap } from 'rxjs/operators';
import { User } from '../user';
import { forkJoin } from 'rxjs';


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

  constructor(public dialog: MatDialog, private competitionService: CompetitionService) {

  }


  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.games = this.competitionService.getGames().pipe(flatMap(games => this.convertGameData(games)));
  }


  convertGameData(games: Game[]): Observable<GameToStore[]> {
    return forkJoin(games.map(game => this.convertToGameToStore(game)));
  }

  convertToGameToStore(game: Game): Observable<GameToStore> {

    var newStatus = new String;
    var today = new Date();


    let newStartDate = new Date(game.competitionStartDate);
    let newEndDate = new Date(game.competitionEndDate);
    if (today < newStartDate)
      newStatus = "UPCOMING";
    if (today > newStartDate && today < newEndDate)
      newStatus = "ONGOING";
    if (today > newStartDate && today > newEndDate)
      newStatus = "COMPLETED";

    return this.competitionService.getPlayerNamesFromGame(game.id).pipe(
      map((playerList: User[]) => playerList.map((player: User) => player.name)),
      map((newPlayerNames: string[]) => ({
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
        playerNames: newPlayerNames,
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
    status: String;
    playerNames: String[];
  }

