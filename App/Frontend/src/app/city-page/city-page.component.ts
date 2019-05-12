import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city.service';
import { City } from '../models/city';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [CityService]
})
export class CityPageComponent implements OnInit {

  cities: City[] = []
  cityForm = new FormGroup({
    city: new FormControl(''),
    country_id: new FormControl('')
  })

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.fetchCity();
  }

  addCity() {
    var jsonFormat = JSON.stringify(this.cityForm.getRawValue());
    this.cityService.addCity(jsonFormat).subscribe(City => {
      this.cities.push(City);
    }
    );
    console.log(jsonFormat);
  }

  fetchCity() {
    this.cityService
    .getCity()
    .subscribe((data: City[]) => {
      this.cities = data;
    });
  }
  
  onSubmit(){
    console.log(this.cityForm.value)
  }
}
