import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

export interface User{
  email : String;
  fullname : String;
  password : String;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

 private user$ = new Subject<User>();
  constructor() { }

  login(email : String, password : String)
  {
      return of({email, password});
  }

  get user(){

    return this.user$.asObservable();
  }

  register(user : any)
  {
     this.user$.next(user);
      return of(user);
  }
}
