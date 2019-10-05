import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashBoardComponent } from './dashboard/dashboard.component';
import { RegistrationDetailsComponent } from './registration/registration.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '/user-details', pathMatch: 'full' },
      { path: "registration", component: RegistrationDetailsComponent },
      { path: "dashboard", component: DashBoardComponent }
    ]
  }
];

export const AuthenticationRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);