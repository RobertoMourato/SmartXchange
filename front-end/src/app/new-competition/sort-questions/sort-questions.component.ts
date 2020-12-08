import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sort-questions',
  templateUrl: './sort-questions.component.html',
  styleUrls: ['./sort-questions.component.css'],
})
export class SortQuestionsComponent {
  questions = [
    'Value Propositions',
    'Key Activities',
    'Costumer Segments \ & Costumer Relationships',
    'Channels',
    'Cost Structure',
    'Key Partners',
    'Key Resources',
    'Revenue Streams',
  ];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

}
