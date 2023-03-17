import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
  
  // public und ohne getter/setter
// export class NotecardComponent {
//   constructor(public firestoreService: FirestoreService) {
//   }
// }
// }
  
  
export class NotecardComponent {
  constructor(private firestoreService: FirestoreService) {
    this.usersArr = 'test';
  }

  get usersArr() {
    return this.firestoreService.usersArr;
  }

  set usersArr(newValue: any) {
    this.firestoreService.usersArr.push(newValue);
  }
}
