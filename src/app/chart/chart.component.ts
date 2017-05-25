import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

import { FormulaService, UserService } from '../shared';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Formula} from "../shared/models/formula.model";

@Component({
  selector: 'chart-page',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit, OnChanges  {
  @Output('onDestroy') onDestroy = new EventEmitter();
  @Input()
  data: Formula;
  yers: Array<Number> = [];
  totalSum: Number;
  totalProfit: Number = 0;
  profitInYear: Array<Number> = [];
  totalSumInYear: Array<Number> = [];
  totalProfitInYear: Array<Number> = [];

  resultProfitFirstFormula: Array<Number> = [];
  resultProfitSecondFormula: Array<Number> = [];
  // resultProfitThirdFormula: Array<Number> = [];
  resultProfitFourthFormula: Array<Number> = [];
  resultProfitFifthFormula: Array<Number> = [];
  constructor(
    private router: Router,
    private formulaService: FormulaService,
    private userService: UserService
  ) {}

  ngOnInit() {
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
        this.showChart();
    }
  };

  public showChart(): void {
    this.yers.push(0);
    if (this.data.resultByFirstFormula != null) {
      this.resultProfitFirstFormula.push(0);
      // this.totalSumInYear.push(this.totalSum);
      // this.profitInYear.push(0);
      // this.totalProfitInYear.push(0);
      for (let ek of this.data.resultByFirstFormula.yearSumList) {
        Object.keys(ek).forEach(key => {
          this.yers.push(Number(key));
          console.log('yers: ' + this.yers);
          this.resultProfitFirstFormula.push(Math.round(ek[key] * 100) / 100);
          // this.profitInYear.push(ek[key]);
          // this.totalSum = ek[key] + this.totalSum;
          // this.totalSumInYear.push(this.totalSum);
          // this.totalProfit += ek[key];
          // this.totalProfitInYear.push(this.totalProfit);
          // this.totalProfitInYear.push(this.totalProfit);
          // console.log('profitInYear: ' + this.profitInYear);
        });
      };
    }
    if (this.data.resultBySecondFormula != null) {
      this.resultProfitSecondFormula.push(0);
      for (let ek of this.data.resultBySecondFormula.yearSumList) {
        Object.keys(ek).forEach(key => {
          console.log('yers: ' + this.yers);
          this.resultProfitSecondFormula.push(Math.round(ek[key] * 100) / 100);
        });
      };
    }
    // if (this.data.resultByThirdFormula != null) {
    //   this.resultProfitThirdFormula.push(0);
    //   for (let ek of this.data.resultByThirdFormula.yearSumList) {
    //     Object.keys(ek).forEach(key => {
    //       console.log('yers: ' + this.yers);
    //       this.resultProfitThirdFormula.push(Math.round(ek[key] * 100) / 100);
    //     });
    //   }
    //   ;
    // }
      if (this.data.resultByFourthFormula != null) {
        this.resultProfitFourthFormula.push(0);
        for (let ek of this.data.resultByFourthFormula.yearSumList) {
          Object.keys(ek).forEach(key => {
            console.log('yers: ' + this.yers);
            this.resultProfitFourthFormula.push(Math.round(ek[key] * 100) / 100);
          });
        }
        ;
      }
        if (this.data.resultFifthFormula != null) {
          this.resultProfitFifthFormula.push(0);
          for (let ek of this.data.resultFifthFormula.yearSumList) {
            Object.keys(ek).forEach(key => {
              console.log('yers: ' + this.yers);
              this.resultProfitFifthFormula.push(Math.round(ek[key] * 100) / 100);
            });
          }
          ;
        }
  }

  public lineChartData:Array<any> = [
    // {data: this.profitInYear, label: 'Прибуток за рік'},
    // {data: this.totalProfitInYear, label: 'Загальний прибуток'},
    // {data: this.totalSumInYear, label: 'Загальна сума'}
    {data: this.resultProfitFirstFormula, label: 'Прибуток при нарахуванні за схемою простих відсотків'},
    {data: this.resultProfitSecondFormula, label: 'Прибуток при нарахуванні за схемою складних відсотків'},
    // {data: this.resultProfitThirdFormula, label: 'Прибуток за третьою формулою'},
    {data: this.resultProfitFourthFormula, label: 'Прибуток при нарахуванні за схемою простих відсотків зі змінною ставкою'},
    {data: this.resultProfitFifthFormula, label: 'Прибуток при нарахуванні за схемою складних відсотків зі змінною ставкою'}

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
  public lineChartType:string = 'bar';

}
