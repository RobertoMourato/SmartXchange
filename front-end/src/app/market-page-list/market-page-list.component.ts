import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketPageListService } from './market-page-list.service';
import { Company } from './company';
import { Question } from './question';
import { StockValue } from './stockValue';
import { Order } from './order';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


@Component({
  selector: 'app-market-page-list',
  templateUrl: './market-page-list.component.html',
  styleUrls: ['./market-page-list.component.css']
})
export class MarketPageListComponent implements OnInit {
  company: Company;
  questions: Question[] = [];
  orders: Order[] = [];
  stockvalues: StockValue[] = [];
  chartValues: object[] = [];
  wallet: number;
  maxStocks: number;
  stocksOwned: number;
  sellOrders: number;

  constructor(private marketPageListService: MarketPageListService, router: Router) { }

  ngOnInit(): void {
    this.CompanyInfo();
    this.QuestionInfo();
    this.WalletInfo();
    this.StocksInfo();
    this.OrdersInfo();
    this.marketPageListService.getCompetition(window.sessionStorage.getItem('competitionId')).subscribe(data => {
      this.maxStocks = data.competitionNumStocks;
    });
  }

  StocksInfo(): void{
    const companyId = window.location.search.split('=')[1];
    this.marketPageListService.getStocksOwned(companyId, window.sessionStorage.getItem('userid')).subscribe(data => {
      this.stocksOwned = data.length;
    });
  }

  WalletInfo(): void{
    this.marketPageListService.getWallet(window.sessionStorage.getItem('userid'),
                                         window.sessionStorage.getItem('competitionId'))
                                         .subscribe(data => { this.wallet = data.wallet; });
  }

  QuestionInfo(): void{
    this.marketPageListService.getQuestionsAndAnswers(window.sessionStorage.getItem('userid')).subscribe(data => {
      data.forEach( element => {
        if (typeof element.responses[0] === 'undefined'){
          element.responses[0] = new Question(element.id,
                                              element.questionText,
                                              element.order,
                                              element.competitionId,
                                              element.isSelected,
                                              element.id,
                                              this.company.id,
                                              '');
        }
        this.questions.push(new Question ( element.id,
                                              element.questionText,
                                              element.order,
                                              element.competitionId,
                                              element.isSelected,
                                              element.responses[0].questionId,
                                              element.responses[0].companyId,
                                              element.responses[0].answerText ) );
      });
    });
  }

  OrdersInfo(): void{
    const companyId = window.location.search.split('=')[1];
    this.marketPageListService.getOrders(companyId, window.sessionStorage.getItem('userid')).subscribe(data => {
      let count = 0;
      data.forEach(element => {
        this.orders = element;
        if (element.orderType === 'Sell'){
          count++;
        }
      });
      this.sellOrders = count;
    });
  }

  BuyOrder(amount: number, price: number): void{
    if (amount <= 0 || price <= 0 ){
      alert('Invalid Order');
    }
    else{
      if (amount > this.maxStocks){
        alert('This company has only ' + this.maxStocks + ' stocks');
      }
      else{
        if (price * amount > this.wallet){
          alert('Not enough money');
        }
        else{
          this.wallet -= price * amount;
          this.marketPageListService.changeWallet(window.sessionStorage.getItem('userid'),
                                                  window.sessionStorage.getItem('competitionId'), -(price * amount))
                                                  .subscribe(data => { });
          const body = JSON.stringify({playerId: window.sessionStorage.getItem('userid'),
                                       companyId: this.company.id,
                                       orderNumStock: amount,
                                       orderValue: price * amount,
                                       orderDate: new Date(),
                                       orderType: 'Buy',
                                       orderStatus: 'Pending',
           });
          this.marketPageListService.placeOrder(body).subscribe(data => {
            alert('Order placed');
          });
        }
      }
    }
  }

  SellOrder(amount: number, price: number): void{
    console.log(this.sellOrders);
    if (amount <= 0 || price <= 0 ){
      alert('Invalid Order');
    }
    else{
      if (this.stocksOwned - this.sellOrders <= 0){
        alert('You don\'t have this many stocks of this company');
      }
      else{
        const body = JSON.stringify({playerId: window.sessionStorage.getItem('userid'),
                                       companyId: this.company.id,
                                       orderNumStock: amount,
                                       orderValue: price * amount,
                                       orderDate: new Date(),
                                       orderType: 'Sell',
                                       orderStatus: 'Pending',
           });
        this.marketPageListService.placeOrder(body).subscribe(data => {
            alert('Order placed');
          });
        this.sellOrders ++;
      }
    }
  }

  CompanyInfo(): void{
    this.marketPageListService.getCompany(window.location.search).subscribe(data => {
      this.company = data;
      let low;
      let high;
      let open;
      let close;
      let date;
      let tDate: Date;
      let first = true;
      data.StockValues.forEach(element => {
        this.stockvalues.push(new StockValue (element.stockValue,
                                              element.stockValueDate
          ));
        if (first){
          low = element.stockValue;
          open = element.stockValue;
          high = element.stockValue;
          date = element.stockValueDate;
          close = element.stockValue;
          tDate = new Date(element.stockValueDate);
          first = false;
        }
        let diff = (new Date(element.stockValueDate).getTime() - tDate.getTime()) / 1000;
        diff /= 60;
        diff = Math.abs(diff);
        if (diff >= 1){
          this.chartValues.push({
            date,
            open,
            high,
            low,
            close});
          low = element.stockValue;
          open = element.stockValue;
          high = element.stockValue;
          date = element.stockValueDate;
          tDate = new Date(element.stockValueDate);
        }
        close = element.stockValue;
        if (low > element.stockValue){
          low = element.stockValue;
        }
        if (high < element.stockValue){
          high = element.stockValue;
        }

      });
      this.drawChart();
      this.StringToHTML('short-pitch', this.company.companyShortPitch);
    });
  }
  StringToHTML(id: string, text: string): void{
    const $pitch = document.getElementById(id);
    $pitch.innerHTML = text;
  }
  drawChart(): void{
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    const chart = am4core.create('graph-container', am4charts.XYChart);
    chart.paddingRight = 20;

    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd HH-mm-ss';

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    const series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'close';
    series.dataFields.openValueY = 'open';
    series.dataFields.lowValueY = 'low';
    series.dataFields.highValueY = 'high';
    series.simplifiedProcessing = true;
    series.tooltipText = 'Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}';

    chart.cursor = new am4charts.XYCursor();

    // a separate series for scrollbar
    const lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.dateX = 'date';
    lineSeries.dataFields.valueY = 'close';
    // need to set on default state, as initially series is "show"
    lineSeries.defaultState.properties.visible = false;

    // hide from legend too (in case there is one)
    lineSeries.hiddenInLegend = true;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeOpacity = 0.5;
    chart.data = this.chartValues;
  }

  redirect(): void {
    window.location.replace('/marketPage');
  }
}
