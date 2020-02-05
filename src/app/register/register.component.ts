import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  fullname : String;
  phone : String;
  password : String;

  hide = true;
  
  constructor(private router : Router, private authService : AuthService) {
        
   }
   register()
   {
     this.authService.register(this.fullname, this.phone, this.password).subscribe(s=> this.router.navigate(['/login']));
   }

  ngOnInit() {
  }

}
