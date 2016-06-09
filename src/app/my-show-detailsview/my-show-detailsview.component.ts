import {Component, OnInit, Inject} from '@angular/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {MyCommentComponent} from '../my-comment';
import {RouteData, RouteParams, OnActivate, ComponentInstruction, CanActivate} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';
import {MyEventsService} from '../my-events.service';
import {MyUsersService} from '../my-users.service';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'my-show-detailsview',
  templateUrl: 'my-show-detailsview.component.html',
  styleUrls: ['my-show-detailsview.component.css'],
  directives: [MyCommentComponent],
  inputs: ['uid'],
  providers: [MyEventsService, MyUsersService]
})
//@CanActivate(() => tokenNotExpired())
export class MyShowDetailsviewComponent implements OnInit {

  event = {};
  eventId;
  map = null;

  constructor(public myUsersService: MyUsersService, public myEventsService: MyEventsService, public data: RouteData, public params: RouteParams, private router: Router) {
  }
    
  ngOnInit() {
    // Get uid from sender
    this.eventId = this.params.get('uid');    
    this.myEventsService.getEvent(this.eventId).then(result => {
     this.event = result;
   });
  }
  
  onClick(id){
    this.router.navigate(['/My-detailview', { uid: id }]);
    return false;
  }
  
  // Check if the user is allowed to edit a specified event.
  isValid() {
    try {
      if(this.event["uid"].includes(this.myUsersService.loggedInUserId))
        return true;      
    }catch(e) {      
      return false;
    }
  } 
}