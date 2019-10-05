import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "contact-create", component: ContactCreateComponent},
  {path: "plan-detail", component: ContactListComponent},
  {path: "dashboard", component: DashBoardComponent},
  {path: "resource-details", component: ResourceDetailsComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);