import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../service/equipment.service';
import { Equipment } from '../models/equipment';

@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.css'],
  providers: [EquipmentService]
})
export class EquipmentPageComponent implements OnInit {

  equipment: Equipment[] = []
  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.fetchEquipment();
  }

  fetchEquipment() {
    this.equipmentService
    .getEquipment()
    .subscribe((data: Equipment[]) => {
      this.equipment = data;
    });
  }

}
