import { Component, OnInit } from '@angular/core';
import { VendorService } from '../service/Vendor.service';
import { Vendor } from '../models/Vendor';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [VendorService]
})
export class VendorPageComponent implements OnInit {

  Vendores: Vendor[] = []
  constructor(private VendorService: VendorService) { }

  ngOnInit() {
    this.fetchVendor();
  }

  fetchVendor() {
    this.VendorService
    .getVendor()
    .subscribe((data: Vendor[]) => {
      this.Vendores = data;
    });
  }

}
