import { Component, computed, signal } from '@angular/core';
import {form, Field} from '@angular/forms/signals';

type LoginFormModel = {
  userName : string,
  email: string,
  password: string
}

type LoginFieldConfig = {
  key: keyof LoginFormModel,
  type: string,
  placeholder: string 
}
@Component({
  selector: 'app-login-form',
  imports: [Field],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {

  loginFormModel = signal<LoginFormModel>({
    userName: '',
    email: '',
    password: ''
  })

  loginForm = form(this.loginFormModel);
  isFormValid = computed(() => {
    const formValue = this.loginFormModel();
    return(
      formValue.userName.trim().length > 0  &&
      formValue.email.trim().includes('@') &&
      formValue.password.trim().length >= 6
    )
  })

  loginFields: LoginFieldConfig[] = [
    {
      key: 'userName',
      type: 'text',
      placeholder: 'UserName'
    },
    {
      key: 'email',
      type: 'text',
      placeholder: 'Email'
    },
    {
      key: 'password',
      type: 'password',
      placeholder: 'Password'
    }
  ]

  onSubmit(event: Event){
    event?.preventDefault();
    console.log('Onsubmit',this.loginFormModel());
  }

}
