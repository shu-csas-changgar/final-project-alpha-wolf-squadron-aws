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
  countryForm = new FormGroup({
    country : new FormControl('')
  });
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountry().subscribe(countries => this.countries = countries);
  }

  addCountry() {
    var newCountry = {
      "country":this.countryForm.value.country
    }
    console.log(newCountry);
    this.countryService.addCountry(newCountry).subscribe(country => {
      this.countries.push(country);
    });
    this.countryService.getCountry().subscribe(countries => this.countries = countries);

  }


 /* deleteCountry(id: any) {
    var countries = this.countries;
    this.countryService.deleteCountry(id).subscribe(() => {
      for (var i = 0; i < this.countries.length; i++) {
        if (countries[i].country_id == id) {
          countries.splice(i, 1);
        }
      }
    }
    });
}*/

  
}
