import {Component, OnInit, Input} from '@angular/core';
import {EventDataService} from '../event-data.service';
import {MyTileComponent} from  '../my-tile';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';
import {Search} from '../search.pipe';
import {MyEventsService} from '../my-events.service';

@Component({
  moduleId: module.id,
  selector: 'my-event-container',
  templateUrl: 'my-event-container.component.html',
  styleUrls: ['my-event-container.component.css'],
  directives: [MyTileComponent],
  inputs: ['eventId', 'searchText'],
  pipes: [Search]
})
export class MyEventContainerComponent implements OnInit {
  @Input() searchText;
  events = {};
  
  onClick(id) {
    this.router.navigate(['/My-show-detailsview', { uid: id }]);
  }
  
  constructor(private router: Router, public myEventService: MyEventsService) {}
  
  ngOnInit() {    
    this.events = this.myEventService.getEvents();
  }

}