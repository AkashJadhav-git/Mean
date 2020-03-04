import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule} from '@angular/flex-layout';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/AdminModules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/AdminModules/dashboard.service';
import { ChangepasswordComponent } from 'src/app/Adminmodules/changepassword/changepassword.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSelectModule} from '@angular/material';
import { PlacementComponent } from 'src/app/Adminmodules/placement/placement.component';
import { HttpClientModule } from '@angular/common/http';
import { CampusdrivesComponent } from 'src/app/AdminModules/campusdrives/campusdrives.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ChangepasswordComponent,
    PlacementComponent,
    CampusdrivesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [
    DashboardService
  ]

})
export class DefaultModule { }
