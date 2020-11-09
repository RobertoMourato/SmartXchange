import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface EmailForInvite {
  email: string;
}

@Component({
  selector: 'app-create-manager-popup',
  templateUrl: './create-manager-popup.component.html',
  styleUrls: ['./create-manager-popup.component.css']
})
export class CreateManagerPopupComponent {

  email: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateManagerPopupDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result; // check what happens if no input
      console.log(this.email);
    });
  }

}


@Component({
  selector: 'app-create-manager-popup-dialog',
  templateUrl: './create-manager-popup-dialog.component.html',
})
export class CreateManagerPopupDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateManagerPopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmailForInvite) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

