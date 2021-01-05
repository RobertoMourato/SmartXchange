import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Offer } from './Offer';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { PortfolioOrdersService } from './portfolio-orders.service';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

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
  constructor(private portfolioService: PortfolioOrdersService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getPendingOrders();
    this.getCompletedOrders();
  }

  getPendingOrders(): void {
    const username = window.sessionStorage.getItem('user');
    // console.log(username);
    const arr = [];
    this.portfolioService.getPendingOrders(username).subscribe((data) => {
      // console.log('Pending data', data);
      data.forEach((element) => {
        if (element.Company == null) {
          return;
        }

        arr.push({
          id: element.id,
          type: element.orderType,
          company: element.Company.companyName,
          status: element.orderStatus,
          qt: element.orderNumStock,
          offer: element.orderValue,
          date: element.createdAt
        });
      });
      this.pendingDataSource = new MatTableDataSource<Offer>(arr);
    });
  }

  getCompletedOrders(): void {
    const username = window.sessionStorage.getItem('user');
    const userId = window.sessionStorage.getItem('userid');
    const competitionId = window.sessionStorage.getItem('competitionId');

    // console.log('completed', username);
    const arr = [];
    this.portfolioService.getCompletedOrders(username).subscribe((data) => {
      // console.log('data', data)
      data.forEach((element) => {
        if (element.Company == null) {
          console.log('No company');
          return;
        }
        arr.push({
          id: element.id,
          type: element.orderType,
          company: element.Company.companyName,
          status: element.orderStatus,
          qt: element.orderNumStock,
          offer: element.orderValue,
          date: this.datepipe.transform(element.createdAt, 'dd/MM/yyyy hh:mm')
        });
      });
      // console.log(arr)
      this.portfolioService.getPartiallyMatchedOrders(userId, competitionId).subscribe((data2) => {
        // console.log('data', data)
        data2.forEach((element) => {
          if (element.Company == null) {
            console.log('No company');
            return;
          }
          arr.push({
            id: element.id,
            type: element.orderType,
            company: element.Company.companyName,
            status: element.orderStatus,
            qt: element.buyExchanges !== undefined ? element.buyExchanges.length : element.sellExchanges.length,
            offer: element.orderValue,
            date: this.datepipe.transform(element.createdAt, 'dd/MM/yyyy hh:mm')
          });
        });

        this.completedDataSource = new MatTableDataSource<Offer>(arr);
      });

    });

  }

  cancelOrder(id: number): void {
    this.portfolioService.cancelOrder(id).subscribe((data) => {
      alert(data);
      this.getPendingOrders();
    });
  }
}
