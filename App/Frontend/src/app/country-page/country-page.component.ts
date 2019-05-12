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

  countries: Country[] = []
  countryForm = new FormGroup({
    country : new FormControl('')
  })
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountry().subscribe(countries => this.countries = countries);
  }

  addCountry() {
    var jsonFormat = JSON.stringify(this.countryForm.getRawValue());
    this.countryService.addCountry(jsonFormat).subscribe(country => {
      this.countries.push(country);
    }
    );
    console.log(jsonFormat);

  }

  createSubmit(){
    console.log(this.countryForm.value);

  }
/*
  deleteCountry(id:any) {
    var countries = this.countries;
    this.countryService.deleteCountry(id).subscribe(data => {
      if(data.n==1)
      {
        for(var i = 0; i< this.countries.length; i++){
          if(countries[i].country_id == id){
            countries.splice(i,1);
          }
        }
      }
    })
  }*/

  
}
