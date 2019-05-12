import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [AddressService]
})
export class AddressPageComponent implements OnInit {

  addresses: Address[] = []
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

}
