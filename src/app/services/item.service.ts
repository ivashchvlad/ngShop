import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // DELETE THIS ಠ_ಠ
  // for tests only
  private items: Item[] = [{
    id: '3',
    name: 'qwe',
    description: 'asd',
    price: 123,
    tags: ['asd', 'asd']
  },
  {
    id: '1',
    name: 'Super',
    description: 'HOT',
    price: 123,
    tags: ['SYPER', 'HUT']
  },
  ];
  // end
  constructor() { }

  getItems() {
    return this.items;
  }

  getById(id: string) {
    if (!id) {
      return undefined;
    }
    return this.items.find(item => item.id === id);
  }

  addToCart(_item: Item) {
    const cart: Cart[] = JSON.parse(localStorage.getItem('lcl_cart')) || [];
    let count: number = JSON.parse(localStorage.getItem('lcl_chrtcount')) || 0;
    // Looking for same item in cart
    const index = cart.findIndex((val) => val.item.id === _item.id);
    if (index >= 0) {
      cart[index].count++;
      setTimeout(() => {
        localStorage.setItem('lcl_cart', JSON.stringify(cart));
      }, 300);
    } else {
      cart.push({item: _item, count: 1});
      setTimeout(() => {
        localStorage.setItem('lcl_cart', JSON.stringify(cart));
      }, 100);
    }
    count++;
    setTimeout(() => {
      localStorage.setItem('lcl_chrtcount', JSON.stringify(count));
    }, 100);
    console.log('item added to cart');
  }

  getCart(): Cart[] {
    const cart: Cart[] = JSON.parse(localStorage.getItem('lcl_cart')) || [];
    return cart;
  }

  removeFromCart(_item: Item) {
    const cart: Cart[] = JSON.parse(localStorage.getItem('lcl_cart')) || [];
    const index = cart.findIndex(val => val.item.id === _item.id);
    if ( index >= 0) {
      if (cart[index].count === 1) {
        cart.splice(index, 1);
      } else {
        cart[index].count--;
      }
    }
    setTimeout(() => {
      localStorage.setItem('lcl_cart', JSON.stringify(cart));
    }, 500);
  }

  getCartCount(): number {
    const count = JSON.parse(localStorage.getItem('lcl_chrtcount')) || 0;
    return count;
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}

export interface Cart {
  item: Item;
  count: number;
}
