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
    this.fetchCity();
  }

  fetchCity() {
    this.countryService
    .getCountry()
    .subscribe((data: Country[]) => {
      this.countries = data;
    });
  }

  addCountry() {
    this.countryService.addCountry(this.countryForm.value).subscribe();
    this.fetchCity();

  }


   deleteCountry(country: Country) {
    this.countryService.deleteCountry(country.country_id).subscribe();
    this.fetchCity();

  }


}
