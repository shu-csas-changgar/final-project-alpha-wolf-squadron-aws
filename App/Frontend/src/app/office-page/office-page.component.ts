import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../service/office.service';
import { Office } from '../models/office';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [OfficeService]
})
export class OfficePageComponent implements OnInit {

  offices: Office[] = []
  officeForm = new FormControl({
    name : new FormControl,
    phone_number : new FormControl,
    equipment_contact : new FormControl,
    address_id : new FormControl
  })
  constructor(private OfficeService: OfficeService) { }

  ngOnInit() {
    this.fetchOffice();
  }

  fetchOffice() {
    this.OfficeService
    .getOffice()
    .subscribe((data: Office[]) => {
      this.offices = data;
    });
  }

  createSubmit(){
    console.log(this.officeForm.value)
  }

}
