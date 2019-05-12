import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { Address } from '../models/address';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [AddressService]
})
export class AddressPageComponent implements OnInit {

  addresses: Address[] = []
  addressForm = new FormGroup({
    address1: new FormControl(''),
    address2: new FormControl(''),
    district: new FormControl(''),
    postal_code: new FormControl(''),
    city_id: new FormControl('')
  });

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.fetchAddress();
  }

  fetchAddress() {
    this.addressService
    .getAddress()
    .subscribe((data: Address[]) => {
      this.addresses = data;
    });
  }

  onSubmit(){
    console.log(this.addressForm.value)
  }
}
