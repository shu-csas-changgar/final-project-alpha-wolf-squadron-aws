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

  inventories: Inventory[] = [];
  inventory: Inventory;
  fk_equipment_id: any;
  fk_employee_id: any;
  fk_room_id: any;
  toggleUpdateButton:boolean = false;
  id: any;
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService
    .getInventory()
    .subscribe(inventories => this.inventories = inventories);
  }

  addinventory() {
    const newinventory = {
      fk_equipment_id: this.fk_equipment_id,
      fk_employee_id: this.fk_employee_id,
      fk_room_id: this.fk_room_id
    }
    this.inventoryService.addInventory(newinventory).subscribe(inventory => {
      this.inventories.push(inventory);
      this.inventoryService
    .getInventory()
    .subscribe(inventories => this.inventories = inventories);
    });
}
updateinventory() {
  var inventories = this.inventories;
  const newInventory = {
      fk_equipment_id: this.fk_equipment_id,
      fk_employee_id: this.fk_employee_id,
      fk_room_id: this.fk_room_id
  }
  const data = {
    inventoryChange: newInventory,
    idSearch: this.id
  }
  this.inventoryService.updateInventory(data).subscribe(inventory => {
    for(var i = 0; i < inventories.length; i++ ){
      if (inventories[i].inventory_id == inventory.inventory_id){
        inventories[i] = inventory;
      }
    }
    this.inventoryService
    .getInventory()
    .subscribe(inventories => this.inventories = inventories);
    });
    this.toggleUpdateButton = false;
  }
  deleteInventory(id: any) {
    var inventories = this.inventories;
  this.inventoryService.deleteInventory(id).subscribe(data =>{
    for(var i = 0; i < inventories.length; i++){
      if(inventories[i].inventory_id == id){
        inventories.splice(i, 1);
      }
    }
  });
}

updateFillIn(inventory: Inventory){
  this.fk_equipment_id = inventory.fk_equipment_id,
  this.fk_employee_id = inventory.fk_employee_id,
  this.fk_room_id = inventory.fk_room_id
  this.id = inventory.inventory_id;
  this.toggleUpdateButton = true;
}

}
