import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  title = 'getstarted';
  users$: Observable<any>;
  usersArr: Array<any> = [];

  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'testcollection');
    this.users$ = collectionData(coll);

    this.users$.subscribe((users) => {
      this.usersArr = users;
      console.log('Users array: ', this.usersArr);
    });
  }
}
