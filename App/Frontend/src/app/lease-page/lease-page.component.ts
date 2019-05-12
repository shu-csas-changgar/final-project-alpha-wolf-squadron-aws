import { Component, OnInit } from '@angular/core';
import { LeaseService } from '../service/lease.service';
import { Lease } from '../models/lease';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lease-page',
  templateUrl: './lease-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [LeaseService]
})
export class LeasePageComponent implements OnInit {

  Leases: Lease[] = []
  leaseForm = new FormGroup({
    star_date: new FormControl,
    end_date : new FormControl
  })
  constructor(private LeaseService: LeaseService) { }

  ngOnInit() {
    this.fetchLease();
  }

  fetchLease() {
    this.LeaseService
    .getLease()
    .subscribe((data: Lease[]) => {
      this.Leases = data;
    });
  }
  
  createSubmit(){
    console.log(this.leaseForm.value)
  }
}
