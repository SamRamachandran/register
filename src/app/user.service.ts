import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [];

  registerUser(user: any) {
    this.users.push(user);
  }

  getUsers(): any[] {
    return this.users;
  }
}
