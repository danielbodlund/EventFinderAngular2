import {Component, OnInit, Inject} from '@angular/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {MyCommentComponent} from '../my-comment';
import {RouteData, Router, RouteParams, OnActivate, ComponentInstruction, CanActivate} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { DateHandlerService } from '../date-handler.service';
import {MyEventsService} from '../my-events.service';
import {MyUsersService} from '../my-users.service';
import {MyPlaceAutocompleteComponent} from '../my-place-autocomplete';

@Component({
  moduleId: module.id,
  selector: 'my-detailview',
  templateUrl: 'my-detailview.component.html',
  styleUrls: ['my-detailview.component.css'],
  providers: [DateHandlerService],
  directives: [MyCommentComponent, MyPlaceAutocompleteComponent],
  inputs: ['comments']
})
//@CanActivate(() => tokenNotExpired())
export class MyDetailviewComponent implements OnInit {

  eventId = ""
  newEvent = false

  constructor(public myUsersService : MyUsersService, public myEventsService: MyEventsService, private dateHandlerService: DateHandlerService, public data: RouteData, public params: RouteParams, private router: Router) {
  }
  event: FullEvent = {name: "",
                      start_date: "",
                      end_date:"",
                      start_time: "",
                      end_time: "",
                      description: "",
                      adress: "",
                      comments: [null],
                      price: "",
                      organizer: "",
                      phone: "",
                      email: "",
                      uid: null,
                      imageURL: ""}
  
  ngOnInit() {
    
    // Get uid from sender
    this.eventId = this.params.get('uid');

    if (this.eventId==="") {
      this.newEvent = true;
    }else {
      this.myEventsService.getEvent(this.eventId).then(result => {
      console.log("list");
       this.event = <FullEvent>result;
    });
    }

  }
  
  save(eid){
    var x : FullEvent = this.event
    if (!this.checkValue()) {
      alert("Fyll i alla fält!")
      return false
    }
    this.checkPicture();

    // If the user is creating a new event.
    if (this.newEvent) {
      
      var timeStamp = this.dateHandlerService.getTimeStamp();
      x.uid = this.myUsersService.loggedInUserId + '-' + timeStamp;
      var newRef = this.myEventsService.updateEvent(x.uid, x);
      this.router.navigate(['/UserEvents']);
      return false;

    }else {
      this.myEventsService.updateEvent(x.uid ,x);
      this.router.navigate(['/My-show-detailsview', { uid: x.uid }]);
      return false;
    }
  }

  checkValue() {
    console.log("inside checkValue")
    var newEvent = {name: this.event.name,
                    start_date: this.event.start_date,
                    end_date: this.event.end_date,
                    start_time: this.event.start_time,
                    end_time: this.event.end_time,
                    description: this.event.description,
                    adress: this.event.adress,
                    comments: [null],
                    price: this.event.price,
                    organizer: this.event.organizer,
                    phone: this.event.phone,
                    email: this.event.email}
    for (var i in newEvent) {
      if(newEvent[i] === "" || newEvent[i] === undefined) {
        return false
      }
    }
    return true
  }

  checkPicture() {
    if (this.event.imageURL === "" || this.event.imageURL === undefined) {
      this.event.imageURL = "http://cdn.almoststill.com/wp-content/uploads/2014/11/img-placeholder-dark.jpg";
    }
  }

  delete() {
    var x;
    if (confirm("Är du säker?") == true) {
        x = "Evenemanget raderades!";
        this.myEventsService.removeEvent(this.eventId);
        this.router.navigate(['/Home']);
    } else {
        x = "Avbröts";
    }
    return false;
  }

  cancel() {
    var x : FullEvent = this.event
    if (!x.uid) {
      this.router.navigate(['/UserEvents']);
    }else {
      this.router.navigate(['/My-show-detailsview', {uid: x.uid}]);
    }
    
    return false;
  }
}