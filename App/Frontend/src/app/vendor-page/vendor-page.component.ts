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

  vendors: Vendor[] = []
  vendorForm = new FormGroup({
    name: new FormControl,
    phone_number: new FormControl,
    contact_email: new FormControl,
    fk_address_id: new FormControl
  })
  constructor(private VendorService: VendorService) { }

  ngOnInit() {
    this.fetchVendor();
  }

  fetchVendor() {
    this.VendorService
    .getVendor()
    .subscribe((data: Vendor[]) => {
      this.vendors = data;
    });
  }

  createSubmit(){
    console.log(this.vendorForm.value)
  }
}
