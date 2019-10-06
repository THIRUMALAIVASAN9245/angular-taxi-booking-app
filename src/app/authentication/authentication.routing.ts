import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: "login", component: LoginComponent },
      { path: "registration", component: RegistrationComponent }
    ]
  }
];

export const AuthenticationRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);