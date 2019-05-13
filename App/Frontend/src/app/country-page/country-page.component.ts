import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../models/country';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [CountryService]
})
export class CountryPageComponent implements OnInit {

  countries: Country[] = [];
  country: Country;
  name: String;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService
    .getCountry()
    .subscribe(countries => this.countries = countries);
  }

  addCountry() {
    const newCountry = {
        country: this.name
    }
    this.countryService.addCountry(newCountry).subscribe(country => {
      this.countries.push(country);
      this.countryService
    .getCountry()
    .subscribe(countries => this.countries = countries);
    });
}
updateCountry() {
  const newCountry = {
    country: this.name
}
  this.countryService.updateCountry(newCountry).subscribe();
  this.countryService
  .getCountry()
  .subscribe(countries => this.countries = countries);

}
   deleteCountry(id: any) {
     var countries = this.countries;
    this.countryService.deleteCountry(id).subscribe(data =>{
      for(var i = 0; i < countries.length; i++){
        if(countries[i].country_id == id){
          countries.splice(i, 1);
        }
      }
  });
  }

  
  updateFillIn(country: Country){
    this.name = country.country;
  }

}