import { Component, computed, signal } from '@angular/core';
import {form, Field} from '@angular/forms/signals';

type RegistrationFormModel = {
  fName: string,
  mName: string,
  lName :string,
  address: string,
  phone: string,
  email: string,
}

type RegistrationFormFieldConfig = {
  key: keyof RegistrationFormModel,
  type: string,
  placeholder: string
}

@Component({
  selector: 'app-registration-form',
  imports: [Field],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm {

  registrationFormModel = signal<RegistrationFormModel>({
    fName: '',
    mName: '',
    lName : '',
    address: '',
    phone: '',
    email: ''
  })

  registrationForm = form(this.registrationFormModel)

  formFields: RegistrationFormFieldConfig[] =[
    {
      key: 'fName',
      type: 'text',
      placeholder: 'Enter First Name'
    },
    {
      key: 'mName',
      type: 'text',
      placeholder: 'Enter Middle Name'
    },
    {
      key: 'lName',
      type: 'text',
      placeholder: 'Enter Last Name'
    },
    {
      key: 'address',
      type: 'text',
      placeholder: 'Enter Address'
    },
    {
      key: 'phone',
      type: 'number',
      placeholder: 'Enter Phone Number'
    },
    {
      key: 'email',
      type: 'email',
      placeholder: 'Enter Email Address'
    }
  ]
  isFormValid = computed( () => {
    const formValue = this.registrationFormModel();
    const onlyChars = /^[A-Za-z]+$/;
    return (
      onlyChars.test(formValue.fName) &&
      onlyChars.test(formValue.mName) &&
      onlyChars.test(formValue.lName) &&
      formValue.address.trim().length > 0 &&
      formValue.phone.trim().length === 10 &&
      formValue.email.trim().includes('@')
    )
  })

  onRegister(event: Event){
    event?.preventDefault();
    console.log('Registration Form Data',this.registrationFormModel());
  }

}
