import { Component, OnInit } from '@angular/core';
import { ItemService, Cart } from '../services/item.service';
import { Item } from '../item';

@Component({
  selector: 'app-cart-displa',
  templateUrl: './cart-displa.component.html',
  styleUrls: ['./cart-displa.component.sass']
})
export class CartDisplaComponent implements OnInit {
  itemsInCart: Cart[];
  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.itemsInCart = this.itemService.getCart();
  }

  addMoreOfItem(item: Item) {
    this.itemService.addToCart(item);
    this.itemsInCart.find(cart => cart.item.id === item.id).count++;
  }

  removeOfItem(item: Item) {
    this.itemService.removeFromCart(item);
    this.itemsInCart.find(cart => cart.item.id === item.id).count--;
  }
}
