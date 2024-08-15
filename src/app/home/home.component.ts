import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myForm!: FormGroup;
  submitted = false;
  totalSum: number;

  constructor(private fb: FormBuilder) {
    this.totalSum=0;
    this.myForm = this.fb.group({
      checkboxGroup: this.fb.group({
        option1: [],
        option2: [],
        option3: [],
        option4: [],
        option5: [],
      }, { validator: this.checkboxValidator }),
      checkboxGroup2: this.fb.group({
        option6: [],
        option7: [],
        option8: [],
        option9: [],
        option10: [],
        option11: [],
      }, { validator: this.usnValidator }),
      checkboxGroup3: this.fb.group({
        option12: [],
        option13: [],
        option14:[],
        option16: [],
      }, { validator: this.acValidator }),
      
      radioGroup: ['', Validators.required]
    });
   
  }

  checkboxValidator(group: FormGroup): { [key: string]: boolean } | null {
    const isChecked = Object.values(group.controls).some(control => control.value);
    return isChecked ? null : { required: true };
  }
  usnValidator(group: FormGroup): { [key: string]: boolean } | null {
    const isChecked = Object.values(group.controls).some(control => control.value);
    return isChecked ? null : { required: true };
  }
  acValidator(group: FormGroup): { [key: string]: boolean } | null {
    const isChecked = Object.values(group.controls).some(control => control.value);
    return isChecked ? null : { required: true };
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      const checkboxValues = this.myForm.value.checkboxGroup;
      const usnValues=this.myForm.value.checkboxGroup2;
      const acValues=this.myForm.value.checkboxGroup3;    
      const radioValue = +this.myForm.value.radioGroup; // Convert to number
      this.totalSum = 0;

      if (checkboxValues.option1) {
        this.totalSum += 5;
      }
      if (checkboxValues.option2) {
        this.totalSum += 18;
      }
      if (checkboxValues.option3) {
        this.totalSum += 22;
      }
      if (checkboxValues.option4) {
        this.totalSum += 38;
      }
      if (checkboxValues.option5) {
        this.totalSum += 50;
      }
      if (usnValues.option6) {
        this.totalSum += 2;
      }
      if (usnValues.option7) {
        this.totalSum += 5;
      }
      if (usnValues.option8) {
        this.totalSum += 12;
      }
      if (usnValues.option9) {
        this.totalSum += 20;
      }
      if (usnValues.option10) {
        this.totalSum += 35;
      }
      if (usnValues.option11) {
        this.totalSum += 50;
      }
      if (acValues.option12) {
        this.totalSum += 8;
      }
      if (acValues.option13) {
        this.totalSum += 5;
      }
      if (acValues.option14) {
        this.totalSum += 10;
      }
      if (acValues.option15) {
        this.totalSum += 25;
      }
      
      this.totalSum += radioValue;

      console.log('Form Submitted!', {
        checkboxValues,
        usnValues,
        acValues,
        radioValue,
        totalSum: this.totalSum
      });
    } else {
      console.log('Form is invalid');
    }
  }


}
