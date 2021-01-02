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

  games: Observable<Game[]>;


  constructor(private http: HttpClient, public dialog: MatDialog) {

  }


  ngOnInit(): void {
    this.getGames();
    this.setUpcomingAndOngoing();
  }

  getGames() {
    this.games = this.http.get<Game[]>(this.ROOT_URL + '/competition/');



    }


  setUpcomingAndOngoing() : void {
    let games = this.games;

    var newStatus = new String;
    var today = new Date();

    // Execute with the observer object
    games.subscribe(x=> {
      for (let game of x) {
      let newStartDate = new Date(game.competitionStartDate);
      let newEndDate = new Date(game.competitionEndDate);
      if (today < newStartDate)
        newStatus = "UPCOMING";
      if (today > newStartDate && today < newEndDate)
        newStatus = "ONGOING";
      if (today > newStartDate && today > newEndDate)
        newStatus = "COMPLETED";
      //(game.status) = newStatus;
      }

    });

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
