import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-new-competition',
  templateUrl: './new-competition.component.html',
  styleUrls: ['./new-competition.component.css']
})
export class NewCompetitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questions = [
    'Value Propositions',
    'Key Activities',
    'Costumer Segments & Costumer Relationships',
    'Channels',
    'Cost Structure',
    'Key Partners',
    'Key Resources',
    'Revenue Streams',
  ];

  
drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
}
}

