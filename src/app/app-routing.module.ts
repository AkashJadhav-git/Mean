import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './AdminModules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';


const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    component : HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'afterLogIn',
    component : DefaultComponent,
    children : [{
      path : '',
      component : DashboardComponent
    }]

  },
  {
  path : 'jobs',
  pathMatch : 'full',
  loadChildren : './jobs/jobs.module#JobsModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
