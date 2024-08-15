import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mobileNumber: string = ''; 
  password: string = ''; 
  isLoggedIn: boolean = false;
   
  constructor() {} 
  
  ngOnInit() {
    const MobileNumber = localStorage.getItem('MobileNumber') || '';
    const Password = localStorage.getItem('Password') || '';

    this.mobileNumber = MobileNumber;
    this.password = Password;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
    }
  }

  handleLogin(): void {
    const MobileNumber = '9876543210'; 
    const Password = '11111'; 

    console.log('User entered mobile number:', this.mobileNumber);
    console.log('User entered password:', this.password);

    if (this.mobileNumber === MobileNumber && this.password === Password) {
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedIn = true; 
    } else {
      localStorage.setItem('isLoggedIn', 'false');
      this.isLoggedIn = false;
    }
  }

  logout() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false; 
      localStorage.clear();
     }
  }
  
}
