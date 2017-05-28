export class Formula {
  id: string = '';
  createdDate: Date;
  sum: number;
  percent: number;
  yearCount: number;
  annualRate: number;
  increasingPercentValueForYear: number;
  countOfCalculatingPeriod: number

  changeablePercentRate: number;
  constantPercentRate: number;

  resultBySimplePercent: Result;
  resultByComplexPercent: Result;
  resultByFormulaWithAnnualRate: Result;
  resultByFormulaWithChangRateSimplePercent: Result;
  resultByFormulaWithChangRateComplexPercent: Result;


}

export class Result {
  result: number;
  yearSumList: Array<Map<number, number>> = [];
}
