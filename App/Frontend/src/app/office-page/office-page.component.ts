import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../service/office.service';
import { Office } from '../models/office';

@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [OfficeService]
})
export class OfficePageComponent implements OnInit {

  Officees: Office[] = []
  constructor(private OfficeService: OfficeService) { }

  ngOnInit() {
    this.fetchOffice();
  }

  fetchOffice() {
    this.OfficeService
    .getOffice()
    .subscribe((data: Office[]) => {
      this.Officees = data;
    });
  }

}
