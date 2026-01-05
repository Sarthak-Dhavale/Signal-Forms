import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import { RegistrationForm } from './Forms/registration-form/registration-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginForm,RegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-signal');
}
