import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashBoardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { PaymentDetailsComponent } from './admin/payment-details/payment-details.component';
import { DriverDetailsComponent } from './admin/driver-details/driver-details.component';
import { RideDetailsComponent } from './admin/ride-details/ride-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/user-details', pathMatch: 'full' },
  {path: "user-details", component: UserDetailsComponent},
  {path: "driver-details", component: DriverDetailsComponent},
  {path: "payment-details", component: PaymentDetailsComponent},
  {path: "ride-details", component: RideDetailsComponent},
  {path: "dashboard", component: DashBoardComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);