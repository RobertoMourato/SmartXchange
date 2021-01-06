import { Component, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface NewQuestion {
  question: string;
}


@Component({
  selector: 'app-sort-questions',
  templateUrl: './sort-questions.component.html',
  styleUrls: ['./sort-questions.component.css'],
})
export class SortQuestionsComponent {
  question: string;

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

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewQuestionDialogComponent, {
      width: '50%',
      // height: '25%',
      data: {question: this.question}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.questions.push(result);
      window.alert(this.questions);
    });
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

}

@Component({
  selector: 'app-new-question-dialog',
  templateUrl: '../new-question-dialog/new-question-dialog.component.html',
})
export class NewQuestionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewQuestion) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


