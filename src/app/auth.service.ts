import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import {switchMap, catchError} from 'rxjs/operators';
import { User } from './User';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user$ = new Subject<User>();
  private apiurl = '/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(email: string, password: string) {
    return of({ email, password });
  }

  logout() {
    this.setUser(null);
    // const [routerLink] = "['/login']", routerLinkActive = 'router-link-active';
    console.log('logged out.');
  }

  get user() {

    return this.user$.asObservable();
  }

  register(user: any) {
    // make api call to save in db and update the user subject.
    // this.setUser(user);
    // console.log('Registered user successfully', user);
    // return of(user);
    return this.httpClient.post(`${this.apiurl}register`, user).pipe(
      switchMap(savedUser => {
        this.setUser(savedUser);
        console.log(`user registered successfully.`, savedUser);
        return of(savedUser);
      }),
      catchError(e=>{
        console.log(`server error occured`, e);
        return throwError('Registration failed please contact the admin.');
      })
    );
  }

  private setUser(user) {
    this.user$.next(user);
  }

}
