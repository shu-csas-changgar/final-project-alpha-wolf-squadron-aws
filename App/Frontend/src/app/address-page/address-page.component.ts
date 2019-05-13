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

  toggleUpdateButton:boolean = false;
  addresses: Address[] = []
    address: Address;
    name: String;
    address2: String;
    district: String;
    postal_code: Number;
    city_id: Number;
    id: any;

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.addressService
    .getAddress()
    .subscribe(addresses => this.addresses = addresses);
  }

  addAddress() {
    const newAddress = {
        address: this.name
    }
    this.addressService.addAddress(newAddress).subscribe(address => {
      this.addresses.push(address);
      this.addressService
    .getAddress()
    .subscribe(addresses => this.addresses = addresses);
    });
}
updateAddress() {
  var addresses = this.addresses;
  const newAddress = {
    address: this.name
  }
  const data = {
    addressChange: newAddress,
    idSearch: this.id
  }
  this.addressService.updateAddress(data).subscribe(address => {
    for(var i = 0; i < addresses.length; i++ ){
      if (addresses[i].address_id == address.address_id){
        addresses[i] = address;
      }
    }
    this.addressService
    .getAddress()
    .subscribe(addresses => this.addresses = addresses);
    });
    this.toggleUpdateButton = false;
  }
  deleteAddress(id: any) {
    var addresses = this.addresses;
  this.addressService.deleteAddress(id).subscribe(data =>{
    for(var i = 0; i < addresses.length; i++){
      if(addresses[i].address_id == id){
        addresses.splice(i, 1);
      }
    }
  });
}

updateFillIn(address: Address){
  this.name =address.address;
  this.id = address.address_id;
  this.toggleUpdateButton = true;
}

}
