import { Component, OnInit } from '@angular/core';
import { ViewServiceService } from '../service/view-service.service';
import { View } from '../models/view';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ViewServiceService]
})
export class ViewPageComponent implements OnInit {

  views: View[] = []
  
  constructor(private viewService: ViewServiceService) { }

  ngOnInit() {
    this.fetchViews();
  }

  fetchViews() {
    this.viewService
    .getView()
    .subscribe((data: View[]) => {
      this.views = data;
    });
  }

  /*getRideOfNull(){
    for(var i = 0; i < this.views.length; i++) { 
      if(this.views[i].equipment_id === null){this.views[i].equipment_id = "N/A";}
        
    equipment_id: number;
    name: String;
    type: String;
    active: number;
    fk_lease_id: number;
    vendor: String;
    fk_employee_id: number;
    fk_room_id: number;
   }
  }*/
}
