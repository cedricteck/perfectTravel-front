import {CancellationPolicyModel} from "./cancellationPolicy-model";
import {SaleContactModel} from "./saleContact-model";

export class CompanyModel {

  id: number;

  ltaPrefix: string;

  oaciCode: string;

  iataCode: string;

  name: string;

  cancellationPolicy: CancellationPolicyModel;

  saleContact: SaleContactModel;


  constructor(companyModel) {
    this.id = companyModel.id || '';
    this.ltaPrefix = companyModel.ltaPrefix || '';
    this.oaciCode = companyModel.oaciCode || '';
    this.iataCode = companyModel.iataCode || '';
    this.name = companyModel.name || '';
    this.cancellationPolicy = companyModel.cancellationPolicy || new CancellationPolicyModel({});
    this.saleContact = companyModel.saleContact || new SaleContactModel({});
  }

}
