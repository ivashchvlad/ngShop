import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../item';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemCollection: AngularFirestoreCollection<Item>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemCollection = afs.collection('items');
  }

  getItems(): Observable<Item[]> {
    return this.afs.collection<Item>('items')
    .snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
        // Get document data
        const data = a.payload.doc.data() as Item;
        // Get document id
        const id = a.payload.doc.id;
        // Use spread operator to add the id to the document data
        return { id, ...data };
      });
    }));
  }

  getById(id: string): Observable<Item> {
    if (!id) {
      return undefined;
    }
    return this.itemCollection.doc(id).snapshotChanges().pipe(
      map(a => {
        const data = a.payload.data() as Item;
        data.id = a.payload.id;
        return data;
      })
    );
  }

  public postItem(item: Item) {
    return this.afs.collection('items').add({
      name: item.name,
      description: item.description,
      price: item.price,
      tags: item.tags
    });
  }

  public updateItem(item: Item) {
    return this.itemCollection.doc(item.id).update(item);
  }

  public deleteItem(id: string) {
    return this.itemCollection.doc(id.toString()).delete();
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
      }, 100);
    } else {
      cart.push({ item: _item, count: 1 });
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
    let count: number = JSON.parse(localStorage.getItem('lcl_chrtcount')) || 0;
    const index = cart.findIndex(val => val.item.id === _item.id);
    if (index >= 0) {
      if (cart[index].count === 1) {
        cart.splice(index, 1);
      } else {
        cart[index].count--;
      }
    }
    count--;
    setTimeout(() => {
      localStorage.setItem('lcl_cart', JSON.stringify(cart));
      localStorage.setItem('lcl_chrtcount', JSON.stringify(count));
    }, 100);
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
