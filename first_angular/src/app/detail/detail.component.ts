import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  housingLocationId = -1;
  housingLocation : HousingLocation | undefined
constructor (private route : ActivatedRoute, private housingService:HousingService ) {
this.housingLocationId = Number (this.route.snapshot.params ['id']);
this.housingLocation = this.housingService.housingGetById (this.housingLocationId)
}
}
