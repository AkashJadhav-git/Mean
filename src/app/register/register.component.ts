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

  userGroup = new FormGroup({
    fullname: new FormControl([Validators.required]),
    email: new FormControl([Validators.required, Validators.email]),
    password: new FormControl([Validators.required]),
    repeatpassword: new FormControl([Validators.required, this.passwordMatch])
  });
  passwordMatch(control: FormControl) {

    const password = control.root.get('password');
    return password && control.value !== password.value ?
      {
        passwordMatch: true
      }
      : null;
  }

  constructor(private router: Router, private authservice: AuthService) {

    console.log('userform', this.userGroup);
  }

  register() {
    if (!this.userGroup.valid) { return; }
    const user = this.userGroup.getRawValue();
    this.authservice.register(user).subscribe(s => this.router.navigate(['/login']));

  }
  get fullname() {
    return this.userGroup.get(this.fullname);
  }
  get email() {
    return this.userGroup.get(this.email);
  }
  get password() {
    return this.userGroup.get(this.password);
  }
  get repeatpassword() {
    return this.userGroup.get(this.repeatpassword);
  }
  ngOnInit() {
  }

}
