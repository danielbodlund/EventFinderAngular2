import {Component, OnInit} from '@angular/core';
import {MyEventContainerComponent} from '../my-event-container';
import {MyCarouselComponent} from '../my-carousel';
import {MySearchbarComponent} from '../my-searchbar'

@Component({
  moduleId: module.id,
  selector: 'my-main',
  templateUrl: 'my-main.component.html',
  styleUrls: ['my-main.component.css'],
  directives: [MyEventContainerComponent, MyCarouselComponent, MySearchbarComponent]  
})
export class MyMainComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}
