export class Formula {
  id: string = '';
  createdDate: Date;
  sum: number;
  percent: number;
  yearCount: number;
  annualRate: number;
  countYearPeriodm: number;
  countCalculatingn: number

  percentWithVariableRate: number;
  normalPercentYears: number;

  resultByFirstFormula: Result;
  resultBySecondFormula: Result;
  resultByThirdFormula: Result;
  resultByFourthFormula: Result;
  resultFifthFormula: Result;

}

export class Result {
  result: number;
  yearSumList: Array<Map<number, number>> = [];
}
