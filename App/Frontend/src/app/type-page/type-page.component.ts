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

  toggleUpdateButton:boolean = false;
  types: Type[] = []
  name: String;
  id: any;
  constructor(private TypeService: TypeService) { }

  ngOnInit() {
    this.TypeService
    .getType()
    .subscribe(types => this.types = types);
  }

  addType() {
    const newType = {
        type: this.name
    }
    this.TypeService.addType(newType).subscribe(type => {
      this.types.push(type);
      this.TypeService
    .getType()
    .subscribe(types => this.types = types);
    });
}
updateType() {
  var types = this.types;
  const newType = {
    type: this.name
  }
  const data = {
    typeChange: newType,
    idSearch: this.id
  }
  this.TypeService.updateType(data).subscribe(type => {
    for(var i = 0; i < types.length; i++ ){
      if (types[i].type_id == type.type_id){
        types[i] = type;
      }
    }
    this.TypeService
    .getType()
    .subscribe(types => this.types = types);
    });
    this.toggleUpdateButton = false;
  }
  deleteType(id: any) {
    var types = this.types;
  this.TypeService.deleteType(id).subscribe(data =>{
    for(var i = 0; i < types.length; i++){
      if(types[i].type_id == id){
        types.splice(i, 1);
      }
    }
  });
}

updateFillIn(type: Type){
  this.name =type.type;
  this.id = type.type_id;
  this.toggleUpdateButton = true;
}
}
