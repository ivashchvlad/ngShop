import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../services/order.service';
import { ItemService } from '../services/item.service';
import { Item } from '../item';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.sass']
})
export class MyOrdersComponent implements OnInit {
  orders: Order[];
  items: Item[];
  constructor(
    private orderService: OrderService,
    private itemService: ItemService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(res => {
      this.orders = res;
    });
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  getItemNames(order: Order) {
    const names: string[] = [];
      order.itemsId.map(id => {
        names.push(this.items.find(item => item.id === id).name);
      });
    return names;
  }
}
