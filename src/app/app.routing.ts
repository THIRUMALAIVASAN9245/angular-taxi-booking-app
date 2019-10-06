import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashBoardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth/registration', pathMatch: 'full' },
  {path: "dashboard", component: DashBoardComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);