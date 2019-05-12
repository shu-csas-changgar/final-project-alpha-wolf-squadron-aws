import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../service/inventory.service';
import { Inventory } from '../models/inventory';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [InventoryService]
})
export class InventoryPageComponent implements OnInit {

  Inventoryes: Inventory[] = []
  constructor(private InventoryService: InventoryService) { }

  ngOnInit() {
    this.fetchInventory();
  }

  fetchInventory() {
    this.InventoryService
    .getInventory()
    .subscribe((data: Inventory[]) => {
      this.Inventoryes = data;
    });
  }

}
