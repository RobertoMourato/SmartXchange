import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-homepage-participants',
  templateUrl: './manager-homepage-participants.component.html',
  styleUrls: ['./manager-homepage-participants.component.css']
})
export class ManagerHomepageParticipantsComponent implements OnInit {

  Participants = [
    {id: 1, name: 'Simão Lopes', role: 'Investor'},
    {id: 2, name: 'Fernando Magalhães', role: 'Investor'},
    {id: 3, name: 'Filipa Alves', role: 'Entrepeneur'},
    {id: 4, name: 'André Arrojado', role: 'Investor'},
  ];

  headElements = ['ID', 'Name', 'role'];

  dataSource = ELEMENT_DATA;
  expandedElement: Participants;
  constructor() { }

  ngOnInit(): void {
  }

}
export interface Participants {
  id: number;
  name: string;
  role: string;
}

const ELEMENT_DATA: Participants[] = [
{id: 1, name: 'Simão Lopes', role: 'Investor'},
{id: 2, name: 'Fernando Magalhães', role: 'Investor'},
{id: 3, name: 'Filipa Alves', role: 'Entrepeneur'},
{id: 4, name: 'André Arrojado', role: 'Investor'}
];
