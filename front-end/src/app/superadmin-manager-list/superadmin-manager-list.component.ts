import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import {animate, state, style, transition, trigger} from '@angular/animations';




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

  constructor() { }

  ngOnInit(): void {
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

