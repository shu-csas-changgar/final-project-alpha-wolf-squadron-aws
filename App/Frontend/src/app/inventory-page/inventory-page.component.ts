import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../service/inventory.service';
import { Inventory } from '../models/inventory';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [InventoryService]
})
export class InventoryPageComponent implements OnInit {

  inventories: Inventory[] = []
  inventoryForm = new FormGroup({
    fk_equipment_id: new FormControl,
    fk_employee_id: new FormControl,
    fk_room_id: new FormControl
  })
  constructor(private InventoryService: InventoryService) { }

  ngOnInit() {
    this.fetchInventory();
  }

  fetchInventory() {
    this.InventoryService
    .getInventory()
    .subscribe((data: Inventory[]) => {
      this.inventories = data;
    });
  }

  createSubmit(){
    console.log(this.inventoryForm.value)
  }

}
