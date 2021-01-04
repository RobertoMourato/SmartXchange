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

  openNewManagerDialog(): void {
    const dialogRef = this.dialog.open(CreateManagerPopupDialogComponent, {
      height: '350px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result; // check what happens if no input
      console.log(this.email);
    });
  }

  openInvitesDialog() {
    const dialogRef = this.dialog.open(SeeInvitesPopupDialogComponent, {
      height: '350px',
      width: '600px',
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

@Component({
  selector: 'app-see-invites-popup-dialog',
  templateUrl: './see-invites-popup-dialog.component.html',
})
export class SeeInvitesPopupDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SeeInvitesPopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmailForInvite) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



