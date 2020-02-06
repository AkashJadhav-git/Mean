import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

/** @title Form field with error messages */
@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email : String;
  password : String;
 
  ngOnInit(){

  }
  constructor(private router : Router, private authService : AuthService){

  }
  login()
  {
      this.authService.login(this.email, this.password).subscribe(s=>this.router.navigate(['']));
  }
 
}
