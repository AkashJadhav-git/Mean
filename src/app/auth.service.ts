import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from './User';

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

  logout()
  {
    this.setUser(null);
    const [routerLink]="['/login']", routerLinkActive="router-link-active";
    console.log('logged out.');
  }

  get user(){

    return this.user$.asObservable();
  }

  register(user : any)
  {
    // make api call to save in db and update the user subject.
     this.setUser(user);    
     console.log('Registered user successfully', user);
      return of(user);
  }

  private setUser(user){
    this.user$.next(user);
  }

}
