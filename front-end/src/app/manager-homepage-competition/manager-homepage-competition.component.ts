import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
//import { competitionSettings } from '../cart.service';
//import { CartService } from '../cart.service';

@Component({
  selector: 'app-manager-homepage-competition',
  templateUrl: './manager-homepage-competition.component.html',
  styleUrls: ['./manager-homepage-competition.component.css']
})

export class ManagerHomepageCompetitionComponent implements OnInit {
  participants: number;
  competitionForm;
  constructor(
    //private cartService: CartService,
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

    //this.items = this.cartService.getItems();
    this.participants = 0;
  }
  onSubmit(competitionData) {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    this.competitionForm.reset();

    console.warn('Your order has been submitted', competitionData);
  }

}
