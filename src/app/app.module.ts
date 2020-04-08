import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompaniesComponent} from './companies/companies.component';
import {CompaniesService} from "./companies/companies-service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { SuccessSnackBarComponent } from './success-snack-bar/success-snack-bar.component';
import {MatSnackBar} from "@angular/material/snack-bar";
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    NavBarComponent,
    SuccessSnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  providers: [CompaniesService,  {provide: LOCALE_ID, useValue: "fr-FR" }, MatSnackBar, SuccessSnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
