import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-superadmin-manager-list',
  templateUrl: './superadmin-manager-list.component.html',
  styleUrls: ['./superadmin-manager-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SuperadminManagerListComponent implements OnInit {

  managers = [
    {id: 1, name: 'Mark', email: 'matty@yahoo.ca'},
    {id: 2, name: 'Jacob', email: 'cmdrgravy@att.net'},
    {id: 3, name: 'Larry', email: 'ozawa@comcast.net'},
  ];

  headElements = ['ID', 'Name', 'Email'];

  managersUnverified = [
    {id: 1, name: 'Ted', email: 'tedrlord@comcast.net'},
    {id: 2, name: 'Daveed', email: 'daveed@outlook.com'},
    {id: 3, name: 'Ryan', email: 'ryanshaw@yahoo.com'},
  ];

  dataSource = ELEMENT_DATA;
  expandedElement: Manager;

  displayedColumns: string[] = ['ID', 'Name', 'Email'];

  readonly ROOT_URL = '/api';

  users: Observable<User[]>;
  newUser: Observable<User[]>;

  unverifiedManagers: Observable<User[]>;
  verifiedManagers: Observable<User[]>;

  constructor(public dialog: MatDialog, private userService: UserService) {

  }

  ngOnInit(): void {
    this.getManagers();
  }

  getManagers(): void{
    this.users = this.userService.getManagers();
  }

  deleteManagerDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteManagerPopupDialogComponent, {
      height: '350px',
      width: '600px',
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  deleteManager(id: number) {
    this.userService.deleteManager(id);
  }



}






export interface Manager {
  id: number;
  name: string;
  email: string;
}


const ELEMENT_DATA: Manager[] = [
  {
    id: 1, name: 'Mark', email: 'matty@yahoo.ca'
  }, {
    id: 2, name: 'Jacob', email: 'cmdrgravy@att.net'
  }, {
    id: 3, name: 'Larry', email: 'ozawa@comcast.net'
  }
];

@Component({
  selector: 'app-delete-manager-popup-dialog',
  templateUrl: './delete-manager-popup-dialog.component.html',
})
export class DeleteManagerPopupDialogComponent {

  status: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteManagerPopupDialogComponent>, private http: HttpClient) {}

  onNoClick(): void {
    this.dialogRef.close();
  }



}



