import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {
   
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
    localStorage.setItem('isLoggedIn', value.toString());
  }
  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }
}
