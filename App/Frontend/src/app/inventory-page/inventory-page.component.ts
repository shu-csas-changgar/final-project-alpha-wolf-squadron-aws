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

  Inventories: Inventory[] = []
  inventoryForm = new FormGroup({
    equipment_id: new FormControl,
    employee_id: new FormControl,
    room_id: new FormControl
  })
  constructor(private InventoryService: InventoryService) { }

  ngOnInit() {
    this.fetchInventory();
  }

  addInventory() {
    var jsonFormat = JSON.stringify(this.inventoryForm.getRawValue());
    this.InventoryService.addInventory(jsonFormat).subscribe(Employee => {
      this.inventories.push(Employee);
    }
    );
    console.log(jsonFormat);
  }

  fetchInventory() {
    this.InventoryService
    .getInventory()
    .subscribe((data: Inventory[]) => {
      this.Inventories = data;
    });
  }

  createSubmit(){
    console.log(this.inventoryForm.value)
  }

}
