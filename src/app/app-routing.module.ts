import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    component : HomeComponent
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
