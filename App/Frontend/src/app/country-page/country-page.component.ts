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

  countrys: Country[] = []
  countryForm = new FormGroup({
    country : new FormControl('')
  })
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.fetchCountrys();
  }

  fetchCountrys() {
    this.countryService
    .getCountry()
    .subscribe((data: Country[]) => {
      this.countrys = data;
    });
  }

  createSubmit(){
    console.log(this.countryForm.value)
  }
}
