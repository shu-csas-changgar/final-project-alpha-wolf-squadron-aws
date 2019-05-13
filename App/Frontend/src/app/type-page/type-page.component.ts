import { Component, OnInit } from '@angular/core';
import { TypeService } from '../service/Type.service';
import { Type } from '../models/Type';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [TypeService]
})
export class TypePageComponent implements OnInit {

  types: Type[] = []
  typeForm = new FormGroup({
    name: new FormControl
  })
  constructor(private TypeService: TypeService) { }

  ngOnInit() {
    this.fetchType();
  }

  fetchType() {
    this.TypeService
    .getType()
    .subscribe((data: Type[]) => {
      this.types = data;
    });
  }

  createSubmit(){
    console.log(this.typeForm.value)
  }
}
