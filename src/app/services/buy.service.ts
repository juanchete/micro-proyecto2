
import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument}
from 'angularfire2/firestore';
import {Compra} from '../models/compra';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  itemsCollection: AngularFirestoreCollection<Compra>;
  items: Observable <Compra[]>;
  itemDoc: AngularFirestoreDocument<Compra>;

  constructor(public afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection('compra', ref => ref.orderBy('pelicula', 'asc'));
    // this.items = this.afs.collection('items').valueChanges();
    this.items =  this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Compra;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

   }

   getItems(){

    return this.items;
  }

  addItem(item: Compra) {

   this.itemsCollection.add(item);

  }

}
