import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';


const routes: Routes = [
{
  path : '',
  pathMatch : "full",
  component : UserhomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
