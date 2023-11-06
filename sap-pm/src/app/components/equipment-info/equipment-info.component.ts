import { Component, OnInit } from '@angular/core';
import { SapPmService } from 'src/app/services/sap-pm.service';

@Component({
  selector: 'app-equipment-info',
  templateUrl: './equipment-info.component.html',
  styleUrls: ['./equipment-info.component.css']
})
export class EquipmentInfoComponent implements OnInit {
equipmentInfo:any;
newMaintenancePlanDetail : any = {};

constructor (private sapPmSrvice :SapPmService) {}

ngOnInit() : void {
  this.equipmentInfo ('12345');
}

getEquipmentInfo (equipmentId:string) {
  this.equipmentInfo = this.sapPmSrvice.getEquipmentInfo(equipmentId);
}

creataeMaintenancePlan () {
  this.sapPmSrvice.createMaintenancePlan (this.newMaintenancePlanDetail)
}
}
