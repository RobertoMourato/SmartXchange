import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-superadmin-manager-list',
  templateUrl: './superadmin-manager-list.component.html',
  styleUrls: ['./superadmin-manager-list.component.css']
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

  constructor() { }

  ngOnInit(): void {
  }



}

