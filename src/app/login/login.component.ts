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

  email = new FormControl('', [Validators.required, Validators.email]);
  password = String;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
 
  hide = true;
  
  ngOnInit(){

  }
  constructor(private router : Router){

  }
  login()
  {
    this.router.navigate(['']);
  }
 
}
