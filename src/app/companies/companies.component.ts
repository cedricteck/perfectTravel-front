import { Component, OnInit } from '@angular/core';
import {CompanyModel} from "./model/company-model";
import {CompaniesService} from "./companies-service";
import {FormBuilder} from "@angular/forms";
import {FlightStatusModel} from "./model/flightStatus-model";
import {MatSelectChange} from "@angular/material/select";
import {$e} from "codelyzer/angular/styles/chars";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  constructor(private companiesService: CompaniesService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      flightStatus: [''],
      until: [''],
      generalInfo: [''],
      conditions: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      visible: ['']
    });
  }

  companies: CompanyModel[];
  currentCompany: CompanyModel;
  form: any;
  keys = Object.keys;
  flightStatuses = FlightStatusModel;

  ngOnInit(): void {
    this.companiesService.getAllCompanies().subscribe( companies => {
      this.companies = companies.map( it =>  new CompanyModel(it));
    })
  }

  onSelectionChange(event){
     this.currentCompany = this.companies.find( it => it.id.toString() === event.value);
  }

  onSubmit() {
    console.log(this.currentCompany);
    this.companiesService.saveCompany(this.currentCompany).subscribe( company => {
      this.currentCompany = new CompanyModel(company);
    });
  }

  changeStatus($event: MatSelectChange) {
    this.currentCompany.cancellationPolicy.flightStatus = $event.value
  }

  onDateChange($event: MatDatepickerInputEvent<any>) {
    this.currentCompany.cancellationPolicy.until = $event.value;
  }
}
