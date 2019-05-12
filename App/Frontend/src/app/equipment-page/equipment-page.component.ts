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

  equipment: Equipment[] = []
  equipmentForm = new FormGroup({
    name : new FormControl,
    active : new FormControl,
    warranty_end_date : new FormControl,
    fk_lease_id : new FormControl,
    fk_vendor_id : new FormControl,
    fk_type_id : new FormControl
  })
  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.fetchEquipment();
  }

  addEquipment() {
    var jsonFormat = JSON.stringify(this.equipmentForm.getRawValue());
    this.equipmentService.addEquipment(jsonFormat).subscribe(equipment => {
      this.equipment.push(equipment);
    }
    );
    console.log(jsonFormat);
  }

  fetchEquipment() {
    this.equipmentService
    .getEquipment()
    .subscribe((data: Equipment[]) => {
      this.equipment = data;
    });
  }

}
