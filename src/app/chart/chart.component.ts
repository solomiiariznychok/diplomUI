import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

import { FormulaService, UserService } from '../shared';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'chart-page',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit, OnChanges  {
  @Output('onDestroy') onDestroy = new EventEmitter();
  @Input()
  data: Array<Map<Number, Number>> = [];
  @Input()
    sum: Number;
  yers: Array<Number> = [];
  totalSum: Number;
  totalProfit: Number = 0;
  profitInYear: Array<Number> = [];
  totalSumInYear: Array<Number> = [];
  totalProfitInYear: Array<Number> = [];
  yearSumList: Array<Map<Number, Number>> = [];
  constructor(
    private router: Router,
    private formulaService: FormulaService,
    private userService: UserService
  ) {}

  ngOnInit() {
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      if (this.data.length) {
        this.showChart();
      }
    }
  };

  public showChart(): void {
    debugger;
    if (this.data.length > 0) {
      this.yearSumList = this.data;
      this.totalSum = this.sum;
      this.yers.push(0);
      this.totalSumInYear.push(this.totalSum);
      this.profitInYear.push(0);
      this.totalProfitInYear.push(0);
      for (let ek of this.yearSumList) {
        Object.keys(ek).forEach(key => {
          this.yers.push(Number(key));
          console.log('yers: ' + this.yers);
          this.profitInYear.push(ek[key]);
          this.totalSum = ek[key] + this.totalSum;
          this.totalSumInYear.push(this.totalSum);
          this.totalProfit += ek[key];
          this.totalProfitInYear.push(this.totalProfit);
          console.log('profitInYear: ' + this.profitInYear);
        });
      }
      ;
    }
  }

  public lineChartData:Array<any> = [
    {data: this.profitInYear, label: 'Прибуток за рік'},
    {data: this.totalProfitInYear, label: 'Загальний прибуток'},
    {data: this.totalSumInYear, label: 'Загальна сума'}
  ];
  public lineChartLabels:Array<any> = this.yers;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';







}
