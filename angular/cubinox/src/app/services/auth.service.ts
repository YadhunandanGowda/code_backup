import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private registerURL = 'http://localhost:8080/users/register';
  private loginURL = 'http://localhost:8080/login';
  constructor(private http: HttpClient,
    private router: Router) { }

  registerUser(user: User) {
    return this.http.post(this.registerURL, user,
      {
        headers: this.headers
      });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  loginUser(user: User) {
    return this.http.post(this.loginURL, user,
      {
        headers: this.headers,
        responseType: 'text'
      });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
