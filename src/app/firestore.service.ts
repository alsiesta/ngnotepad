import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  title = 'Meine eigene User DB';
  users$: Observable<any>;
  usersArr: Array<any> = [];

  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'testcollection');
    this.users$ = collectionData(coll);
    
//###################
    // das hier auskommentieren, wenn Du das Observable "users$" direkt einbinden willst
    this.users$.subscribe((users) => {
      this.usersArr = users;
      console.log('Users array: ', this.usersArr);
    });
//###################
    
    this.title = this.title;
  }

  
}
