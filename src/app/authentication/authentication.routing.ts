import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { RegistrationDetailsComponent } from './registration/registration.component';

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: '/registration', pathMatch: 'full' },
      { path: "registration", component: RegistrationDetailsComponent }
    ]
  }
];

export const AuthenticationRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);