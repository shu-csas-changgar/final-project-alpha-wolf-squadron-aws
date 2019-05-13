import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../service/equipment.service';
import { Equipment } from '../models/equipment';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.css'],
  providers: [EquipmentService]
})
export class EquipmentPageComponent implements OnInit {

  equipment: Equipment[] = [];
  singleEquipment: Equipment;
  name: String;
  active : any;
  warranty_end_date : any;
  fk_lease_id : any;
  fk_vendor_id : any;
  fk_type_id : any;
  id: any;
  toggleUpdateButton:boolean = false;


  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService
    .getEquipment()
    .subscribe(equipment => this.equipment = equipment);
  }

  addEquipment() {
    const newSingleEquipment = {
      name: this.name,
      active : this.active,
      warranty_end_date : this.warranty_end_date,
      fk_lease_id : this.fk_lease_id,
      fk_type_id : this.fk_type_id
    }
    this.equipmentService.addEquipment(newSingleEquipment).subscribe(singleEquipment => {
      this.equipment.push(singleEquipment);
      this.equipmentService
    .getEquipment()
    .subscribe(equipment => this.equipment = equipment);
    });
}
updateEquipment() {
  var equipment = this.equipment;
  const newSingleEquipment = {
      name: this.name,
      active : this.active,
      warranty_end_date : this.warranty_end_date,
      fk_lease_id : this.fk_lease_id,
      fk_type_id : this.fk_type_id
  }
  const data = {
    equipmentChange: newSingleEquipment,
    idSearch: this.id
  }
  this.equipmentService.updateEquipment(data).subscribe(singleEquipment => {
    for(var i = 0; i < equipment.length; i++ ){
      if (equipment[i].equipment_id == singleEquipment.equipment_id){
        equipment[i] = singleEquipment;
      }
    }
    this.equipmentService
    .getEquipment()
    .subscribe(equipment => this.equipment = equipment);
    });
    this.toggleUpdateButton = false;
  }
  deleteEquipment(id: any) {
    var equipment = this.equipment;
  this.equipmentService.deleteEquipment(id).subscribe(data =>{
    for(var i = 0; i < equipment.length; i++){
      if(equipment[i].equipment_id == id){
        equipment.splice(i, 1);
      }
    }
  });
}

updateFillIn(singleEquipment: Equipment){
  this.name = singleEquipment.name,
  this.active = singleEquipment.active,
  this.warranty_end_date = singleEquipment.warranty_end_date,
  this.fk_lease_id = singleEquipment.fk_lease_id,
  this.fk_type_id = singleEquipment.fk_type_id
  this.id = singleEquipment.equipment_id;
  this.toggleUpdateButton = true;
}

}
