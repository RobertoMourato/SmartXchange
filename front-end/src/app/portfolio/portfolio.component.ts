import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Offer } from './Offer';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { PortfolioOrdersService } from './portfolio-orders.service';

const ELEMENT_DATA: Offer[] = [
  { type: 'string', company: 'string', status: 'string', qt: 2, offer: 2 },
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  displayedColumns: string[] = [
    'type',
    'company',
    'status',
    'quantity',
    'offer',
    'cancelButton',
  ];

  pendingOffers: Offer[] = [];
  completedOffers: Array<Offer>;
  pendingDataSource: MatTableDataSource<Offer>;
  dataSource: MatTableDataSource<Offer>;
  completedDataSource: MatTableDataSource<Offer>;
  constructor(private portfolioService: PortfolioOrdersService) {}

  ngOnInit(): void {
    this.pendingOffers = new Array<Offer>();
    this.getPendingOrders();

    console.log('pendingOrders', this.pendingOffers);
    console.log('ELDA', ELEMENT_DATA);
   

   // console.log('pds', this.pendingDataSource.data);

    //
    //console.log('ED', ELEMENT_DATA);
    //this.pendingDataSource = new MatTableDataSource<Offer>(ELEMENT_DATA);

    //console.log('pendingDatasource', this.pendingDataSource);
    //this.dataSource =  new MatTableDataSource(this.offers)

    this.getCompletedOrders;
    this.completedDataSource = new MatTableDataSource<Offer>(
      this.completedOffers
    );
    this.dataSource = new MatTableDataSource<Offer>(ELEMENT_DATA);
    console.log('filt', this.dataSource.data);
  }

  getPendingOrders() {
    const username = window.sessionStorage.getItem('user');
    //console.log(username);
    const arr = [];
    this.portfolioService.getPendingOrders(username).subscribe((data) => {
      //  console.log('data', data);
      data.forEach((element) => {
        if (element.company == null) {
          return;
        }

        arr.push({
          type: element.orderType,
          company: element.company.companyName,
          status: element.orderStatus,
          qt: element.orderNumStock,
          offer: 100,
        });
      });
      this.pendingDataSource = new MatTableDataSource<Offer>(arr);
    });
  }

  getCompletedOrders() {
    const username = window.sessionStorage.getItem('user');
    console.log(username);

    this.portfolioService.getCompletedOrders(username).subscribe((data) => {
      this.completedOffers = data;
    });
  }
}
