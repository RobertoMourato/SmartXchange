import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ManagerHomepageDialogComponent } from '../manager-homepage-dialog/manager-homepage-dialog.component';
// import { competitionSettings } from '../cart.service';
// import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-manager-homepage-competition',
  templateUrl: './manager-homepage-competition.component.html',
  styleUrls: ['./manager-homepage-competition.component.css']
})

export class ManagerHomepageCompetitionComponent implements OnInit {
  participants: number;
  competitionForm;
  constructor(
    // private cartService: CartService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    ) {

    this.competitionForm = this.formBuilder.group({
    rate: '',
    companyValue: '',
    stocks: '',
    cash: '',
  });
 }
  ngOnInit(): void {

    // this.items = this.cartService.getItems();
    this.participants = 0;
  }
  onSubmit(competitionData): void {
    // Process checkout data here
    this.competitionForm.reset();
    // send info
  }
  openDialog(competitionData: any): void{
    const dialogRef = this.dialog.open(ManagerHomepageDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (`${result}` === 'true'){
        console.warn('Your order has been submitted', competitionData);
      }
        // send info
      else{

          }

    })
    ;
  }


}
