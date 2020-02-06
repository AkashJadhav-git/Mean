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
    fullname: new FormControl( [Validators.required]),
    email : new FormControl([Validators.required, Validators.email]),
    password : new FormControl([Validators.required])
  })

  constructor(private router : Router, private authservice : AuthService){

        console.log('userform', this.userGroup);
  }

  register()
  {
        const user = this.userGroup.getRawValue();

        this.authservice.register(user).subscribe(s=>this.router.navigate(['/login']));

  }
  ngOnInit() {
  }

}
