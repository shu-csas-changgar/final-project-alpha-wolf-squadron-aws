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

  toggleUpdateButton: boolean = false;
  offices: Office[] = []
  office: Office
  name: String;
  phone_number: String;
  equipment_contact: String;
  fk_address_id: Number;
  id: any;

  constructor(private OfficeService: OfficeService) { }

  ngOnInit() {
    this.OfficeService
      .getOffice()
      .subscribe(offices => this.offices = offices);
  }

  addOffice() {
    const newOffice = {
      office: this.name,

    }
    this.OfficeService.addOffice(newOffice).subscribe(office => {
      this.offices.push(office);
      this.OfficeService
        .getOffice()
        .subscribe(offices => this.offices = offices);
    });
  }
  updateOffice() {
    var offices = this.offices;
    const newOffice = {
      office: this.name
    }
    const data = {
      officeChange: newOffice,
      idSearch: this.id
    }
    this.OfficeService.updateOffice(data).subscribe(office => {
      for (var i = 0; i < offices.length; i++) {
        if (offices[i].office_id == office.office_id) {
          offices[i] = office;
        }
      }
      this.OfficeService
        .getOffice()
        .subscribe(offices => this.offices = offices);
    });
    this.toggleUpdateButton = false;
  }
  deleteOffice(id: any) {
    var offices = this.offices;
    this.OfficeService.deleteOffice(id).subscribe(data => {
      for (var i = 0; i < offices.length; i++) {
        if (offices[i].office_id == id) {
          offices.splice(i, 1);
        }
      }
    });
  }

  updateFillIn(office: Office) {
    this.name = office.office;
    this.id = office.office_id;
    this.equipment_contact = office.equipment_contact;
    this.fk_address_id = office.fk_address_id;
    this.phone_number = office.phone_number;
    this.toggleUpdateButton = true;
  }


}
