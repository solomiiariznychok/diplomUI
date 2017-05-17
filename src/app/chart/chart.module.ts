import { ModuleWithProviders, NgModule } from '@angular/core';

import { ChartComponent } from './chart.component';
import { SharedModule } from '../shared';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RouterModule } from '@angular/router';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: ChartComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    ChartsModule,
  ],
  exports: [
    ChartComponent
  ],
  declarations: [ ChartComponent]
})
export class ChartModule {}
