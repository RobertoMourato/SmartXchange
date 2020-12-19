import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Offer } from './Offer';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { PortfolioOrdersService } from './portfolio-orders.service';
import { DatePipe } from '@angular/common';

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
  completedDisplayedColumns: string[] = [
    'type',
    'company',
    'status',
    'quantity',
    'offer',
    'date',
  ];


  pendingOffers: Offer[] = [];
  completedOffers: Array<Offer>;
  pendingDataSource: MatTableDataSource<Offer>;
  dataSource: MatTableDataSource<Offer>;
  completedDataSource: MatTableDataSource<Offer>;
  constructor(private portfolioService: PortfolioOrdersService, public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.pendingOffers = new Array<Offer>();
    
    this.getPendingOrders();
    this.getCompletedOrders();

    // console.log('pds', this.pendingDataSource.data);

    //
    //console.log('ED', ELEMENT_DATA);
    //this.pendingDataSource = new MatTableDataSource<Offer>(ELEMENT_DATA);

    //console.log('pendingDatasource', this.pendingDataSource);
    //this.dataSource =  new MatTableDataSource(this.offers)

 
    //this.dataSource = new MatTableDataSource<Offer>(ELEMENT_DATA);
    //console.log('filt', this.dataSource.data);
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
          id: element.id,
          type: element.orderType,
          company: element.company.companyName,
          status: element.orderStatus,
          qt: element.orderNumStock,
          offer: element.orderValue,
          date: element.createdAt
        });
      });
      this.pendingDataSource = new MatTableDataSource<Offer>(arr);
    });
  }

  getCompletedOrders() {
    const username = window.sessionStorage.getItem('user');
    console.log('completed',username);
    const arr =[];
    this.portfolioService.getCompletedOrders(username).subscribe((data) => {
      console.log('data',data)
      data.forEach((element) => {
        if (element.company == null) {
          console.log('No company')
          return;
        }
        arr.push({
          id: element.id,
          type: element.orderType,
          company: element.company.companyName,
          status: element.orderStatus,
          qt: element.orderNumStock,
          offer: element.orderValue,
          date: this.datepipe.transform(element.createdAt, 'dd/MM/yyyy hh:mm')
        });
      });
      this.completedDataSource = new MatTableDataSource<Offer>(arr);
    });
    console.log('completed',this.completedDataSource)
  }

  cancelOrder(id: number) {
    this.portfolioService.cancelOrder(id).subscribe((data) => {
      alert(data);
      this.getPendingOrders();
    });
  }
}
