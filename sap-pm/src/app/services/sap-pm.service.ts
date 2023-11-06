import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SapPmService {

  constructor() { }

  getEquipmentInfo (equipmentId : string) {
    return {equipmentId, description : 'Eguipment Description'}
  }

  createMaintenancePlan (planDetail: any) {
    return 'Maintenance plan created successfully'
  }
}
