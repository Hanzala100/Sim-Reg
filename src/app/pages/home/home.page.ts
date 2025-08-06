import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SimRegistrationData } from 'src/app/interfaces/simRegisteration.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, CommonModule, FormsModule, ReactiveFormsModule]
})
export class HomePage implements OnInit {
  registrationForm: FormGroup;
  isSubmitting = false;

  // Dropdown options
  genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  idTypeOptions = [
    { value: 'national-id', label: 'National ID' },
    { value: 'passport', label: 'Passport' },
    { value: 'driving-license', label: 'Driving License' },
    { value: 'voter-id', label: 'Voter ID' }
  ];

  stateOptions = [
    { value: 'central', label: 'Central Region' },
    { value: 'east', label: 'East Region' },
    { value: 'north', label: 'North Region' },
    { value: 'north-east', label: 'North-East Region' },
    { value: 'west', label: 'West Region' }
  ];


  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      birthDate: ['', [Validators.required]],
      state: ['', [Validators.required]],
      province: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-()]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      idNumber: ['', [Validators.required, Validators.minLength(5)]],
      idType: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d{5,10}$/)]],
      emergencyContact: ['', [Validators.required]],
      emergencyPhone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-()]+$/)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registrationForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.registrationForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['required']) return `${this.getFieldLabel(fieldName)} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) return `${this.getFieldLabel(fieldName)} is too short`;
      if (field.errors['maxlength']) return `${this.getFieldLabel(fieldName)} is too long`;
      if (field.errors['pattern']) return `Please enter a valid ${this.getFieldLabel(fieldName)}`;
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      firstName: 'First Name',
      lastName: 'Last Name',
      birthDate: 'Birth Date',
      state: 'State',
      province: 'Province',
      city: 'City',
      gender: 'Gender',
      phoneNumber: 'Phone Number',
      email: 'Email',
      idNumber: 'ID Number',
      idType: 'ID Type',
      address: 'Address',
      postalCode: 'Postal Code',
      emergencyContact: 'Emergency Contact',
      emergencyPhone: 'Emergency Phone'
    };
    return labels[fieldName] || fieldName;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.isSubmitting = true;
      const formData: SimRegistrationData = this.registrationForm.value;

      console.log('SIM Registration Data:', formData);
      console.log('Form Status:', this.registrationForm.status);

      setTimeout(() => {
        this.isSubmitting = false;
        console.log('Registration submitted successfully!');

      }, 2000);
    } else {
      console.log('Form is invalid');
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.registrationForm.controls).forEach(key => {
      this.registrationForm.get(key)?.markAsTouched();
    });
  }

  onReset(): void {
    this.registrationForm.reset();
    console.log('Form reset');
  }
}
