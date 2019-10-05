import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { DashBoardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { PaymentDetailsComponent } from './admin/payment-details/payment-details.component';
import { DriverDetailsComponent } from './admin/driver-details/driver-details.component';
import { RideDetailsComponent } from './admin/ride-details/ride-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashBoardComponent,
    UserDetailsComponent,
    DriverDetailsComponent,
    PaymentDetailsComponent,
    RideDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// http://icanstudioz.com/taxiapp/admin/users
