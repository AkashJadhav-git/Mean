import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    fullname: new FormControl( [Validators.required]),
    email : new FormControl([Validators.required, Validators.email]),
    
  })

  getErrorMessage() {
    return this.userForm.hasError('required') ? 'You must enter a value' :
        this.userForm.hasError('email') ? 'Not a valid email' :
            '';
  }

  ngOnInit() {
  }

}
