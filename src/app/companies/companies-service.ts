import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CompanyModel} from "./model/company-model";

@Injectable()
export class CompaniesService {

  constructor(private httpClient: HttpClient) {}

  getAllCompanies(): Observable<CompanyModel[]> {
    return this.httpClient.get<CompanyModel[]>("http://localhost:8092/airlines")
  }

  saveCompany(company: CompanyModel): Observable<CompanyModel> {
    return this.httpClient.post<CompanyModel>("http://localhost:8092/airlines/"+ company.id, company);
  }

}
