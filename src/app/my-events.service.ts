import {Injectable, Inject, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {Event, FullEvent} from './IEvent';


@Injectable()
export class MyEventsService {
  constructor(public af: AngularFire, @Inject(FirebaseRef) public ref: any) {}
  
  getEvent(eventId){    
    return new Promise(resolve => {
      this.ref.child('/events/' + eventId).on("value", (a) => {
       resolve(a.exportVal());
     });
    });
  }
  
  getEvents(){
    return this.af.database.list('/events');
  }
  
  updateEvent(eventId, data) {
    return this.ref.child('/events/' + eventId).update(data);
  }

  removeEvent(eventId) {
    this.ref.child('/events/' + eventId).remove();
  }
}
 