import { state } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  registeredUsers: any[] = [];
  usersPerPage: number =3;
  currentPage: number = 1;
  editIndex: number | null = null;

  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = [2020, 2021, 2022, 2023, 2024];
  countries: string[] = ['India', 'Australia', 'Canada', 'Germany', 'Japan'];

  states: { [key: string]: string[] } = {
    'India': ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan'],
    'Australia': ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia'],
    'Canada': ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba'],
    'Germany': ['Bavaria', 'Berlin', 'Hamburg', 'Hesse', 'Saxony'],
    'Japan': ['Tokyo', 'Osaka', 'Kyoto', 'Hokkaido', 'Fukuoka']
  };

  cities: { [key:string]:string[]}={
    Maharashtra :['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'],
    Karnataka: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi'],
    TamilNadu : ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    Gujarat : ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
    Rajasthan : ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'],
  };

selectedStates: string[] = [];
selectedCities: string[]=[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('^[A-Za-z\\s]+$')]],
      lastName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('^[A-Za-z\\s]+$')]],
      dob: this.fb.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required]
      }),
      email: ['', [Validators.required, Validators.email]],
      gender: ['',Validators.required],
      address: ['',[Validators.required, Validators.pattern('^[A-Za-z\\s]+$')]],
      pincode: ['', (Validators.required)],
      country: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]+$')]],
      state: ['',[Validators.required, Validators.pattern('^[A-Za-z\\s]+$')]],
      city: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]+$')]],
    
      course: ['',Validators.required],
      hobbies: ['',Validators.required],
    });
    this.userForm.get('country')?.valueChanges.subscribe((country: string) => {
      this.selectedStates = this.states[country] || [];
      this.userForm.get('state')?.setValue('');
    });

    this.userForm.get('state')?.valueChanges.subscribe((state:string)=>{
      this.selectedCities=this.cities[state] || [];
      this.userForm.get('city')?.setValue('');
    })
    
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.editIndex !== null) {
        this.registeredUsers[this.editIndex] = this.userForm.value;
        this.editIndex = null;
      } else {
        this.registeredUsers.push(this.userForm.value);
      }
      this.userForm.reset();
    } else {
      console.log('Form is invalid');
      this.userForm.markAllAsTouched();
    }
  }
  

  deleteUser(index: number) {   
    this.registeredUsers.splice(index, 1);
  }

  editUser(index: number) {
    const user = this.registeredUsers[index];
    this.userForm.patchValue(user);
    this.editIndex = index;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage * this.usersPerPage < this.registeredUsers.length) {
      this.currentPage++;
    }
  }
}
