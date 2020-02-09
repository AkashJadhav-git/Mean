import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError, switchMapTo } from 'rxjs/operators';
import { User } from './User';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user$ = new Subject<User>();
  private apiurl = '/api/auth/';
  constructor(private httpClient: HttpClient) { }

  private setUser(user) {
    this.user$.next(user);
  }

  get user() {

    return this.user$.asObservable();
  }

  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log(`Login credentials`, loginCredentials);
    return this.httpClient.post<User>(`${this.apiurl}login`, loginCredentials).pipe(
      switchMap(foundUser => {
        this.setUser(foundUser);
        console.log(`user found`, foundUser);
        return of(foundUser);
      }),
      catchError(e => {
        console.log(`Your login details could not be verified plaese try again`, e);
        return throwError(`Your login details could not be verified plaese try again.`);
      })
    );
  }

  register(user: any) {

    return this.httpClient.post(`${this.apiurl}register`, user).pipe(
      switchMap(savedUser => {
        this.setUser(savedUser);
        console.log(`user registered successfully.`, savedUser);
        return of(savedUser);
      }),
      catchError(e => {
        console.log(`server error occured`, e);
        return throwError('Registration failed please contact the admin.');
      })
    );
  }

}
