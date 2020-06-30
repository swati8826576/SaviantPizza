import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/User';
import {  Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  myAppUrl: string;
  myApiUrl: string;
  constructor(private http: HttpClient,  @Inject('BASE_URL') baseUrl: string) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  //public get currentUserValue(): User {
  //  return this.currentUserSubject.value;
  //}

  login(username, password  ) {
    alert("in service")
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'Login/';
    //return this.http.get<string[]>(this.myAppUrl + this.myApiUrl)
     


    //return this.http.get<string[]>(this.myAppUrl + this.myApiUrl)
    alert(this.myAppUrl + this.myApiUrl);

    return this.http.post<any>(this.myAppUrl + this.myApiUrl, { username, password })
    //  .pipe(map(user => {
    //    // store user details and jwt token in local storage to keep user logged in between page refreshes
    //    localStorage.setItem('currentUser', JSON.stringify(user));
    //    this.currentUserSubject.next(user);
    //    return user;
    //  }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
