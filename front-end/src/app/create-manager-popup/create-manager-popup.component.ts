import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmailService } from '../email.service';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-create-manager-popup',
  templateUrl: './create-manager-popup.component.html',
  styleUrls: ['./create-manager-popup.component.css']
})
export class CreateManagerPopupComponent {


  constructor(public dialog: MatDialog) { }

  openNewManagerDialog(): void {
    const dialogRef = this.dialog.open(CreateManagerPopupDialogComponent, {
      height: '350px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openInvitesDialog() {
    const dialogRef = this.dialog.open(SeeInvitesPopupDialogComponent, {
      height: '350px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'app-create-manager-popup-dialog',
  templateUrl: './create-manager-popup-dialog.component.html',
})
export class CreateManagerPopupDialogComponent {

  public email: string;

  constructor(
    public dialogRef: MatDialogRef<CreateManagerPopupDialogComponent>, private emailService: EmailService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendEmail() {
    const invitedBy = window.sessionStorage.getItem('user');
    this.emailService.sendEmail(this.email, invitedBy);
  }


}

@Component({
  selector: 'app-see-invites-popup-dialog',
  templateUrl: './see-invites-popup-dialog.component.html',
})
export class SeeInvitesPopupDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SeeInvitesPopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public emailForInvite: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



