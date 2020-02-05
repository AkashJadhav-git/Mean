import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email:String, password:String)
  {
      return of({email, password});
  }
  register(fullname:String, email:String, phone:String, password:String)
  {
      return of({fullname, email, phone, password});
  }
}
