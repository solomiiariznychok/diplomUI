export class Formula {
  id: string = '';
  createdDate: Date;
  sum: number;
  percent: number;
  yearCount: number;
  resultByFirstFormula: Result;
  resultBySecondFormula: Result;
  resultByThirdFormula: Result;

}

export class Result {
  result: number;
  yearSumList: Array<Map<number, number>> = [];
}
