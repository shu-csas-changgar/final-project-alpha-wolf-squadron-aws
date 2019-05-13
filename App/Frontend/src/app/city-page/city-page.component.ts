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

  toggleUpdateButton:boolean = false;
  cities: City[] = [];
  city: City;
  name: String;
  fk_country_id: any;
  id: any;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService
    .getCity()
    .subscribe(cities => this.cities = cities);
  }

  addCity() {
    const newCity = {
      city: this.name,
      fk_country_id: this.fk_country_id
    }
    this.cityService.addCity(newCity).subscribe(city => {
      this.cities.push(city);
      this.cityService
    .getCity()
    .subscribe(cities => this.cities = cities);
    });
}
updateCity() {
  var cities = this.cities;
  const newCity = {
    city: this.name,
    fk_country_id: this.fk_country_id
  }
  const data = {
    cityChange: newCity,
    idSearch: this.id
  }
  this.cityService.updateCity(data).subscribe(city => {
    for(var i = 0; i < cities.length; i++ ){
      if (cities[i].city_id == city.city_id){
        cities[i] = city;
      }
    }
    this.cityService
    .getCity()
    .subscribe(cities => this.cities = cities);
    });
    this.toggleUpdateButton = false;
  }
  deleteCity(id: any) {
    var cities = this.cities;
  this.cityService.deleteCity(id).subscribe(data =>{
    for(var i = 0; i < cities.length; i++){
      if(cities[i].city_id == id){
        cities.splice(i, 1);
      }
    }
  });
}

updateFillIn(city: City){
  this.name =city.city;
  this.fk_country_id = city.fk_country_id;
  this.id = city.city_id;
  this.toggleUpdateButton = true;
}
}
