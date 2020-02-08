import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccumulationChartModule, PieSeriesService, AccumulationTooltipService,
AccumulationDataLabelService} from '@syncfusion/ej2-angular-charts';
import { AdminhomeRoutingModule} from './adminhome-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminhomeRoutingModule,
    AccumulationChartModule
  ],
    bootstrap : [DashboardComponent],
    providers : [PieSeriesService, AccumulationDataLabelService, AccumulationTooltipService]

})
export class AdminhomeModule { }
