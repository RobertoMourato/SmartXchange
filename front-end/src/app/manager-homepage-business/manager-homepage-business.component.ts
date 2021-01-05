import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manager-homepage-business',
  templateUrl: './manager-homepage-business.component.html',
  styleUrls: ['./manager-homepage-business.component.css']
})
export class ManagerHomepageBusinessComponent implements OnInit {
  participants: number;
  businessForm;
  constructor(
    // private cartService: CartService,
    private formBuilder: FormBuilder,
    ) {

    this.businessForm = this.formBuilder.group({
    value: '',
    activities: '',
    customer: '',
    channels: '',
    structure: '',
    partners: '',
    resources: '',
    revenue: '',
  });
 }
  ngOnInit(): void {

    // this.items = this.cartService.getItems();
  }
  onSubmit(competitionData): void{
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    this.businessForm.reset();

    console.warn('Your  have updated business model', competitionData);
  }
}
