import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CompanyModel} from "./model/company-model";
import {environment} from "../../environments/environment";

@Injectable()
export class CompaniesService {

  constructor(private httpClient: HttpClient) {}

  getAllCompanies(): Observable<CompanyModel[]> {
    return this.httpClient.get<CompanyModel[]>(environment.api.basePath + "/airlines")
  }

  saveCompany(company: CompanyModel): Observable<CompanyModel> {
    return this.httpClient.post<CompanyModel>(environment.api.basePath + "/airlines/"+ company.id, company);
  }

}
