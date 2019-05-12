import { Component, OnInit } from '@angular/core';
import { ViewServiceService } from '../service/view-service.service';
import { View } from '../models/view';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
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

}
