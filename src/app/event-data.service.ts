import {Injectable, Inject} from '@angular/core';
import {Carousel} from './carousel.pipe';
import {FirebaseRef, FirebaseListObservable, AngularFire} from 'angularfire2/angularfire2'

@Injectable()
export class EventDataService {

  constructor(public af: AngularFire,@Inject(FirebaseRef) private ref: any) {
  }
  
  getEvents() {   
   return this.af.database.list('/events');
   
  }
}


  