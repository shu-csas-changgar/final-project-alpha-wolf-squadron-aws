import { Component, OnInit } from '@angular/core';
import { VendorService } from '../service/Vendor.service';
import { Vendor } from '../models/Vendor';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [VendorService]
})
export class VendorPageComponent implements OnInit {

  toggleUpdateButton:boolean = false;
  vendors: Vendor[] = []
  name: String;
  phone: String;
  email: String;
  fk_address_id: any;
  id: any;
  constructor(private VendorService: VendorService) { }

  ngOnInit() {
    this.VendorService
    .getVendor()
    .subscribe(vendors => this.vendors = vendors);
  }

  addVendor() {
    const newVendor = {
        vendor: this.name
    }
    this.VendorService.addVendor(newVendor).subscribe(vendor => {
      this.vendors.push(vendor);
      this.VendorService
    .getVendor()
    .subscribe(vendors => this.vendors = vendors);
    });
}
updateVendor() {
  var vendors = this.vendors;
  const newVendor = {
    vendor: this.name
  }
  const data = {
    vendorChange: newVendor,
    idSearch: this.id
  }
  this.VendorService.updateVendor(data).subscribe(vendor => {
    for(var i = 0; i < vendors.length; i++ ){
      if (vendors[i].vendor_id == vendor.vendor_id){
        vendors[i] = vendor;
      }
    }
    this.VendorService
    .getVendor()
    .subscribe(vendors => this.vendors = vendors);
    });
    this.toggleUpdateButton = false;
  }
  deleteVendor(id: any) {
    var vendors = this.vendors;
  this.VendorService.deleteVendor(id).subscribe(data =>{
    for(var i = 0; i < vendors.length; i++){
      if(vendors[i].vendor_id == id){
        vendors.splice(i, 1);
      }
    }
  });
}

updateFillIn(vendor: Vendor){
  this.name =vendor.name;
  this.email = vendor.email;
  this.phone = vendor.phone;
  this.fk_address_id = vendor.fk_address_id;
  this.id = vendor.vendor_id;
  this.toggleUpdateButton = true;
}


  
}
