export class SaleContactModel {

  id: number;

  firstName: string;

  lastName: string;

  email: string;

  phoneNumber: string;

  visible: boolean;

  constructor(saleContactModel) {
    this.id = saleContactModel.id || '';
    this.firstName = saleContactModel.firstName || '';
    this.lastName = saleContactModel.lastName || '';
    this.email = saleContactModel.email || '';
    this.phoneNumber = saleContactModel.email || '';
    this.visible = saleContactModel.visible || false;
  }

}
