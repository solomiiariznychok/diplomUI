import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared';
import {Formula} from '../shared/models/formula.model';
import {FormulaService} from '../shared/services/formula.service';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formulas: Array<Formula> = [];
  formulasLoaded: boolean = false;
  yers: Array<Number> = [];
  profitInYear: Array<Number> = [];
  isSubmitting = false;
  formulaForm: FormGroup;
  commentFormErrors = {};
  constructor(
    private router: Router,
    private formulaService: FormulaService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.formulaForm = this.fb.group({
      sum: '',
      yearCount: '',
      percent: '',
      annualRate: '',
      increasingPercentValueForYear: '',
      countOfCalculatingPeriod: '',
      changeablePercentRate: '',
      constantPercentRate: ''
  });
  }

  ngOnInit() {
    this.formulaService.getAll()
    .subscribe(formulas => {
      console.log('formulas: ' + formulas);
      this.formulas = formulas;
      this.formulasLoaded = true;
    });

  }
  caclulateFormula() {
    let formulaBody = this.formulaForm.value;
    this.formulaService.add(formulaBody)
        .subscribe(
            formula => {
              this.formulas.unshift(formula);
              this.isSubmitting = false;
            },
            errors => {
              this.isSubmitting = false;
              this.commentFormErrors = errors;
            }
        );
  }
  deleteFormula(id: String, i: number) {
    this.formulaService.delete(id);
    this.formulas.splice(i, 1);
  }
}
