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

  toggleUpdateButton:boolean = false;
  countries: Country[] = [];
  countryForm = new FormGroup({
    country : new FormControl('')
  });
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.fetchCountry();
  }

  fetchCountry() {
    this.countryService
    .getCountry()
    .subscribe((data: Country[]) => {
      this.countries = data;
    });
  }

  addCountry() {
    this.countryService.addCountry(this.countryForm.value).subscribe();
    this.fetchCountry();

  }


   deleteCountry(id: any) {
    this.countryService.deleteCountry(id).subscribe();
    this.fetchCountry();

  }

  toggleUpdateAdd(){
    this.toggleUpdateButton = !this.toggleUpdateButton
  }


}
