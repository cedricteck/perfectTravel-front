import {FlightStatusModel} from "./flightStatus-model";

export class CancellationPolicyModel {

  id: number;

  flightStatus: FlightStatusModel;

  until: Date;

  lastUpdatedDate: Date;

  generalInfo: string;

  conditions: string;


 constructor(cancellationPolicyModel) {
   this.id = cancellationPolicyModel.id || '';
   this.flightStatus = cancellationPolicyModel.flightStatus || null;
   this.until = cancellationPolicyModel.until || null;
   this.lastUpdatedDate = cancellationPolicyModel.lastUpdatedDate || '';
   this.generalInfo = cancellationPolicyModel.generalInfo || '';
   this.conditions = cancellationPolicyModel.conditions || '';
 }

}
