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

  login(EmailId, password) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'Login/';

    return this.http.post<any>(this.myAppUrl + this.myApiUrl, { EmailId, password })

  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
