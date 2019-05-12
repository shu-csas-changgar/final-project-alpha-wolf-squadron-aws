import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city.service';
import { City } from '../models/city';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [CityService]
})
export class CityPageComponent implements OnInit {

  cities: City[] = []
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.fetchCity();
  }

  fetchCity() {
    this.cityService
    .getCity()
    .subscribe((data: City[]) => {
      this.cities = data;
    });
  }

}
