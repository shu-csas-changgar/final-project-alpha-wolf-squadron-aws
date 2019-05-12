import { Component, OnInit } from '@angular/core';
import { TypeService } from '../service/Type.service';
import { Type } from '../models/Type';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [TypeService]
})
export class TypePageComponent implements OnInit {

  Typees: Type[] = []
  constructor(private TypeService: TypeService) { }

  ngOnInit() {
    this.fetchType();
  }

  fetchType() {
    this.TypeService
    .getType()
    .subscribe((data: Type[]) => {
      this.Typees = data;
    });
  }

}
