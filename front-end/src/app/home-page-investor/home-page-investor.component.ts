import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Ranking } from './ranking';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { HomePageService } from './home-page.service';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-home-page-investor',
  templateUrl: './home-page-investor.component.html',
  styleUrls: ['./home-page-investor.component.css'],
})
export class HomePageInvestorComponent implements OnInit {
  user: User;
  rankings: Ranking[] = [];
  playerRatings = [];
  headers: String[] = ['Position', 'Name', 'Price', 'Gain'];
  dataSource = this.rankings;

  constructor(private homePageService: HomePageService) {}

  ngOnInit(): void {
    this.getRankingData();
    this.buildGraph();
  }

  getRankingData(): void {
    const playerId = window.sessionStorage.getItem('userid');
    const competitionId = window.sessionStorage.getItem('competition');
    const rankingsArray = this.homePageService
      .getPlayerRankingsData(playerId, competitionId)
      .subscribe((data) => {
        data.forEach(element => {
          this.playerRatings.push({value:element.rankingPoints, date: element.createdAt})
        });
      });
  }
  buildGraph(): void {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart);
    console.log('playerRating',this.playerRatings)
    chart.data = this.playerRatings;

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-ddHH:mm';
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.stroke = am4core.color('#FFF');
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.stroke = am4core.color('#FFF');

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
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
    series.tooltip.label.textValign = 'middle';

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color('#FFF');

    let bullethover = bullet.states.create('hover');
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
