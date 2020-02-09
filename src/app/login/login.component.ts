import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

/** @title Form field with error messages */
@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;

  ngOnInit() {

  }
  constructor(private router: Router, private authService: AuthService) {

  }
  login() {

    console.log(`data`, this.email, this.password)
    this.error = ' ';
    this.authService.login(this.email, this.password).subscribe(s => this.router.navigate(['']),

      e => (this.error = e)
    );
  }

}
