import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AuthenticationRouting } from './authentication.routing';
import { AuthComponent } from './auth.component';

import { RegistrationDetailsComponent } from './registration.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegistrationDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AuthenticationRouting
  ],
  providers: [],
})
export class AuthenticationModule { }
// http://icanstudioz.com/taxiapp/admin/users
