import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/adminhome/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],

})
export class DefaultModule { }
