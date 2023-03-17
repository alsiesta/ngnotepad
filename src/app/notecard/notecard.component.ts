import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss'],
})

// public und ohne getter/setter
export class NotecardComponent {
  constructor(public firestoreService: FirestoreService) {}
}

// #################################################
// private Service & getter/setter
// clean coding: keep services private and make property variables available via getter/setter methods. This way, the component.ts controles accessibility to the services properties.

// export class NotecardComponent {
//   // title = ''; -- entweder diesen Title direkt
  
//   constructor(private firestoreService: FirestoreService) {
//     this.usersArr = 'test';
//     // this.title = firestoreService.title; -- entweder diesen Title direkt
//     this.title; //oder diesen Title per getter fn
//   }

//   get title() { //oder diesen Title per getter fn
//     return this.firestoreService.title;
//   }

//   get usersArr() {
//     return this.firestoreService.usersArr;
//   }

//   set usersArr(newValue: any) {
//     this.firestoreService.usersArr.push(newValue);
//   }
// }
