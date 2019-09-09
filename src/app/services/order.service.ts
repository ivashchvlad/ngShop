import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderCollection: AngularFirestoreCollection<Order>;
  constructor(private afs: AngularFirestore) {
    this.orderCollection = afs.collection('order');
  }

  getOrders() {
    return this.afs.collection<Order>('orders').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          // Get document data
          const data = a.payload.doc.data() as Order;
          // Get document id
          const id = a.payload.doc.id;
          // Use spread operator to add the id to the document data
          return { id, ...data };
        });
      })
    );
  }

  postOrder(order: any) {
    return this.afs.collection('orders').add({
      counts: order.counts,
      itemsId: order.itemsId,
      date: new Date(),
      userId: ''
    });
  }
}

export interface Order {
  id: string;
  counts: string[];
  date: Date;
  itemsId: string[];
  userId: string;
}
