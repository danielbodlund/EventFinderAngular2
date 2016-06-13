import { Component, OnInit } from '@angular/core';
import {GoogleplaceDirective} from 'angular2-google-map-auto-complete/directives/googleplace.directive';

@Component({
  moduleId: module.id,
  selector: 'app-my-google-auto-complete',
  directives: [GoogleplaceDirective],
  templateUrl: 'my-google-auto-complete.component.html',
  styleUrls: ['my-google-auto-complete.component.css']
})
export class MyGoogleAutoCompleteComponent implements OnInit {

public address : Object;

  constructor() {}

  ngOnInit() {
  }
       getAddress(place:Object) {       
           this.address = place['formatted_address'];
           var location = place['geometry']['location'];
           var lat =  location.lat(57.7016454);
           var lng = location.lng(11.6135035);
           console.log("Address Object", place);
           
       }
}
