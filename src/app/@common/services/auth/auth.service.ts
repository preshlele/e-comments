import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private appUrl = environment.appUrl;

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(username: any, password: any): void {
    this.http
      .post<LoginResponse>(`${this.appUrl}/auth/login`, { username, password })
      .subscribe({
        next: (response) => {
          const token = response.token;
          localStorage.setItem('token', token);
          this.router.navigate(['/products']);
        },
        error: (error) => console.log(error, 'login error'),
      });
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
   return localStorage.getItem('token');
  }
}
