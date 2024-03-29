import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList : HousingLocation [] = [];
  constructor (private housingLocation: HousingService) {
  this.housingLocationList = this.housingLocation.housingGetAll();
  }
}
