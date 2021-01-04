import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketPageListService } from './market-page-list.service';
import { Company } from './company';
import { Question } from './question';
import { StockValue } from './stockValue';
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
  stockvalues: StockValue[] = [];
  chartValues: object[] = [];
  wallet: number;

  constructor(private marketPageListService: MarketPageListService, router: Router) { }

  ngOnInit(): void {
    this.CompanyInfo();
    this.QuestionInfo();
    this.WalletInfo();
    this.StocksInfo();
    this.drawChart();
  }

  StocksInfo(): void{
    const companyId = window.location.search.split('=')[1];
    console.log(companyId);
    this.marketPageListService.getStocksOwned(companyId, window.sessionStorage.getItem('userid')).subscribe(data => {
      data.forEach(element => {
      });

    });
  }

  WalletInfo(): void{
    this.marketPageListService.getWallet(window.sessionStorage.getItem('userid'),
    window.sessionStorage.getItem('competitionId')).subscribe(data => {
      this.wallet = data.wallet;
    });
  }

  QuestionInfo(): void{
    this.marketPageListService.getQuestionsAndAnswers(window.sessionStorage.getItem('userid')).subscribe(data => {
      console.log(data);
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

  CompanyInfo(): void{
    this.marketPageListService.getCompany(window.location.search).subscribe(data => {
      /*this.company = data;
      let low, high, open, close, date;
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
        console.log(diff);
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
      console.log(typeof(this.stockvalues[0].stockValueDate));
      this.StringToHTML('short-pitch', this.company.companyShortPitch);*/
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
}
