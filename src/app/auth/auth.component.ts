// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated (you can customize this logic)
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

    if (isAuthenticated) {
      return true; // Allow access to the dashboard
    } else {
      // Redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
