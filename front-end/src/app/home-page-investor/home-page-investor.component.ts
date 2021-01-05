import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Ranking } from './ranking';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { HomePageService } from './home-page.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home-page-investor',
  templateUrl: './home-page-investor.component.html',
  styleUrls: ['./home-page-investor.component.css'],
})
export class HomePageInvestorComponent implements OnInit {
  user: User;
  rankings: Ranking[] = [];
  playerRatings = [];
  headers: string[] = ['Position', 'Name', 'Gain', 'Percentage'];
  dataSource: MatTableDataSource<Ranking>;
  // dataSource = this.rankings;
  playerOrder: number;

  constructor(private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.getPlayerRankingData();
    this.getLatestRankings();
  }

  getLatestRankings(): void {

    const competitionId = window.sessionStorage.getItem('competitionId');

    const playerId = window.sessionStorage.getItem('userid');

    this.homePageService.getLatestData(competitionId).subscribe((data) => {
      // console.log('data', data)
      const arr = [];
      data.forEach(element => {
        // console.log('element', element)
        if (element.PlayerCompetition.User.id === playerId) {
          this.playerOrder = element.rankingPosition;
        }
        arr.push(new Ranking(element.rankingPosition, element.PlayerCompetition.User.name, 0, 0, element.createdAt));
      });
      this.dataSource = new MatTableDataSource<Ranking>(arr);
      const final = [];
      try {
        if (this.playerOrder === 1) {
          final.push(arr[0], arr[1], arr[2]);
        } else {
          if (this.playerOrder === arr.length) {
            final.push(arr[arr.length - 3], arr[arr.length - 2], arr[arr.length - 1]);
          } else {
            final.push(arr[this.playerOrder - 2], arr[this.playerOrder - 1], arr[this.playerOrder]);
          }
        }
      } catch (error) {
        console.log(error);
      }

      this.dataSource = new MatTableDataSource<Ranking>(final);
    });
  }

  getPlayerRankingData(): void {
    const playerId = window.sessionStorage.getItem('userid');
    const competitionId = window.sessionStorage.getItem('competitionId');
    this.homePageService
      .getPlayerRankingsData(playerId, competitionId)
      .subscribe(async (data) => {
        await data.forEach(element => {
          this.playerRatings.push({ value: element.rankingPosition, date: element.createdAt });
        });
        this.buildGraph();
      });
  }
  buildGraph(): void {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    const t = [{
      date: '2013-01-29',
      value: 84
    }, {
      date: '2013-01-30',
      value: 81
    }];
    console.log('t', t);
    this.playerRatings.forEach(element => {

    });
    console.log(this.playerRatings);
    chart.data = this.playerRatings;
    console.log('chart', chart.data);

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-ddHH:mm';

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.stroke = am4core.color('#FFF');
    dateAxis.renderer.labels.template.fill = am4core.color('#FFF');

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.stroke = am4core.color('#FFF');
    valueAxis.renderer.labels.template.fill = am4core.color('#FFF');
    valueAxis.title.text = 'Rankings';
    valueAxis.min = 0;
    valueAxis.title.stroke = am4core.color('#FFF');

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.dateX = 'date';
    series.tooltipText = '{value}';
    series.strokeWidth = 2;
    series.minBulletDistance = 15;
    series.stroke = am4core.color('#06b164');

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = 'middle';

    // Make bullets grow on hover
    const bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color('#FFF');

    const bullethover = bullet.states.create('hover');
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    /*chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = 'panXY';
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;*/
  }
}
