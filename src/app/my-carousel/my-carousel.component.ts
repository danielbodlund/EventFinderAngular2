import {Component, OnInit, Inject, NgZone} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {FirebaseRef, FirebaseListObservable, AngularFire} from 'angularfire2/angularfire2'
import {CarouselEvent} from '../IEvent';
import {Carousel} from '../carousel.pipe';
import {Router} from '@angular/router-deprecated';
import {EventDataService} from '../event-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-carousel',
  directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'my-carousel.component.html',
  styleUrls: ['my-carousel.component.css'],
  pipes: [Carousel],
  providers: [EventDataService]
})
export class MyCarouselComponent implements OnInit {
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides: FirebaseListObservable <any []>;

constructor(public af: AngularFire,@Inject(FirebaseRef) private _ref: any, 
            private router: Router, private slideService: EventDataService,
            private _ngZone: NgZone) {
}

ngOnInit() {
      this.slides = this.slideService.getEvents();
}

onClicked(id: String) {
  console.log("Klickad");
  this.router.navigate(['/My-show-detailsview', { uid: id }]);
}
}


