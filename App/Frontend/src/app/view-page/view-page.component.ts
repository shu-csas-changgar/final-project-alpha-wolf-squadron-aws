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
  ID = new FormControl('')
  
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



}
