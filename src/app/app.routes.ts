import { Routes } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import { RegistrationForm } from './Forms/registration-form/registration-form';

export const routes: Routes = [
    {
        path: '',
        component: LoginForm
    },
    {
        path: 'register',
        component: RegistrationForm
    }
];
