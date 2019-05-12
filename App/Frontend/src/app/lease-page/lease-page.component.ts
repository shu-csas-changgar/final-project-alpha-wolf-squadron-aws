import { Component, OnInit } from '@angular/core';
import { LeaseService } from '../service/lease.service';
import { Lease } from '../models/lease';

@Component({
  selector: 'app-lease-page',
  templateUrl: './lease-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [LeaseService]
})
export class LeasePageComponent implements OnInit {

  Leasees: Lease[] = []
  constructor(private LeaseService: LeaseService) { }

  ngOnInit() {
    this.fetchLease();
  }

  fetchLease() {
    this.LeaseService
    .getLease()
    .subscribe((data: Lease[]) => {
      this.Leasees = data;
    });
  }

}
