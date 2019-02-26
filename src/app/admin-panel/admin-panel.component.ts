import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { OrderService, Order } from '../services/order.service';
import { Item } from '../item';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {
  items: Item[];
  newItem: Item;
  orders: Order[];
  constructor(
    private itemService: ItemService,
    private orderService: OrderService) {
    }

  ngOnInit() {
    this.newItem = {id: '', name: '', description: '', price: 0, tags: []};
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
    this.orderService.getOrders().subscribe(res => {
      this.orders = res;
    });
  }

  deleteItem(item: Item) {
    return this.itemService.deleteItem(item.id);
  }

  editItem(item: Item) {
    return this.itemService.updateItem(item);
  }

  createItem() {
    console.log(this.newItem);
    return this.itemService.postItem(this.newItem);
  }

  getItemNames(order) {
    const names: string[] = [];
      order.itemsId.map(id => {
        names.push(this.items.find(item => item.id === id).name);
      });
    return names;
  }
}
