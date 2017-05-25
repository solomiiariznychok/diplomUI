import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import {Formula} from '../models/formula.model';

@Injectable()
export class FormulaService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[Formula]> {
    return this.apiService.get('formula');
  }
  add(payload): Observable<Formula> {
    return this.apiService.post('formula', payload);
  }
  delete(id): void {
    this.apiService.delete('formula/' + id);
  }

}
