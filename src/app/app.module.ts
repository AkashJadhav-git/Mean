import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VpMaterialModule } from './material-module';
import { HomeComponent } from './home/home.component';
import { JobsModule } from './jobs/jobs.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminhomeModule } from './adminhome/adminhome.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VpMaterialModule,
    JobsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminhomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
