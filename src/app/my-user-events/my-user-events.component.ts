import {Component, OnInit, Inject} from '@angular/core';
import {EventDataService} from '../event-data.service';
import {MyTileComponent} from  '../my-tile';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';
import {MyEventsService} from '../my-events.service';
import {MyUsersService} from '../my-users.service';

@Component({
  moduleId: module.id,
  selector: 'my-user-events',
  templateUrl: 'my-user-events.component.html',
  styleUrls: ['my-user-events.component.css'],
  directives: [MyTileComponent]
})
export class MyUserEventsComponent implements OnInit {

  events: FirebaseListObservable <any []>;
  
    constructor(public myUsersService: MyUsersService, private router: Router, public myEventsService: MyEventsService) {}

  
  onClick(id) {
    this.router.navigate(['/My-show-detailsview', { uid: id }]);
  }
  
  onNewEventClick(id){
    this.router.navigate(['/My-detailview', { uid: id }]);
  }
  
  
  ngOnInit() {
    this.events = <FirebaseListObservable <any[]>> this.myEventsService.getEvents().map(events => {
      return events.filter(event => {
        return event.uid.includes(this.myUsersService.loggedInUserId);
      });
    });
  }

}
