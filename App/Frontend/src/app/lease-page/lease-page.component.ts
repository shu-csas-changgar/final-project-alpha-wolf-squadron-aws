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

  toggleUpdateButton:boolean = false;
  leases: Lease[] = [];
  lease: Lease;
  start_date: String;
  end_date : String;
  id: any;

  constructor(private LeaseService: LeaseService) { }

  ngOnInit() {
    this.LeaseService
    .getLease()
    .subscribe(leases => this.leases = leases);
  }

  addLease() {
    const newLease = {
        start_date : this.start_date,
        end_date :this.end_date
    }
    this.LeaseService.addLease(newLease).subscribe(lease => {
      this.leases.push(lease);
      this.LeaseService
    .getLease()
    .subscribe(leases => this.leases = leases);
    });
}
updateLease() {
  var leases = this.leases;
  const newLease = {
    start_date: this.start_date,
    end_date: this.end_date
  }
  const data = {
    leaseChange: newLease,
    idSearch: this.id
  }
  this.LeaseService.updateLease(data).subscribe(lease => {
    for(var i = 0; i < leases.length; i++ ){
      if (leases[i].lease_id == lease.lease_id){
        leases[i] = lease;
      }
    }
    this.LeaseService
    .getLease()
    .subscribe(leases => this.leases = leases);
    });
    this.toggleUpdateButton = false;
  }
  deleteLease(id: any) {
    var leases = this.leases;
  this.LeaseService.deleteLease(id).subscribe(data =>{
    for(var i = 0; i < leases.length; i++){
      if(leases[i].lease_id == id){
        leases.splice(i, 1);
      }
    }
  });
}

updateFillIn(lease: Lease){
  this.start_date = lease.start_date;
  this.end_date = lease.end_date;
  this.id = lease.lease_id;
  this.toggleUpdateButton = true;
}


}

