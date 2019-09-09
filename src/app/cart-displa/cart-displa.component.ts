import { Component, OnInit } from '@angular/core';
import { ItemService, Cart } from '../services/item.service';
import { OrderService, Order } from '../services/order.service';
import { Item } from '../item';

@Component({
  selector: 'app-cart-displa',
  templateUrl: './cart-displa.component.html',
  styleUrls: ['./cart-displa.component.sass']
})
export class CartDisplaComponent implements OnInit {
  itemsInCart: Cart[];
  constructor(
    public itemService: ItemService,
    public orderService: OrderService,
  ) { }

  ngOnInit() {
    this.itemsInCart = this.itemService.getCart();
  }

  addMoreOfItem(item: Item) {
    this.itemService.addToCart(item);
    this.itemsInCart.find(cart => cart.item.id === item.id).count++;
  }

  removeOfItem(item: Item) {
    this.itemService.removeFromCart(item);
    const removedItem = this.itemsInCart.find(cart => cart.item.id === item.id);
    if (removedItem.count > 1) {
      removedItem.count--;
    } else {
      this.itemsInCart = this.itemsInCart.filter(i => i !== removedItem);
    }
  }

  totalPrice() {
    let totalPrice = 0;
    this.itemsInCart.map((item) => {
      return totalPrice += item.item.price * item.count;
    });
    return totalPrice;
  }

  submitOrder() {
    this.orderService.postOrder({
      counts: this.itemsInCart.map(item => item.count.toString()),
      itemsId: this.itemsInCart.map(items => items.item.id),
    })
  }
}
