import {Component, Inject, NgZone} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';
import {AngularFire} from 'angularfire2';
import {MyMainComponent} from './my-main';
import {MyDetailviewComponent} from './my-detailview';
import {MyShowDetailsviewComponent} from './my-show-detailsview';
import {MyProfileSettingsComponent} from './my-profile-settings'
import {MyCreateAccountComponent} from './my-create-account/my-create-account.component';
import {MyLoginComponent} from './my-login/my-login.component';
import {FirebaseRef, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {MyUserEventsComponent} from './my-user-events';
import {MyUsersService} from './my-users.service';

@Component({
  moduleId: module.id,
  selector: 'event-finder-app',
  providers: [ROUTER_PROVIDERS, MyUsersService],
  templateUrl: 'event-finder.component.html',
  styleUrls: ['event-finder.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, DROPDOWN_DIRECTIVES],
  pipes: []
})

@RouteConfig([

  {path: '/home', name: 'Home', component: MyMainComponent, useAsDefault: true},
  {path: '/my-detailview', name: 'My-detailview', component: MyDetailviewComponent},
  {path: '/my-show-detailsview', name: 'My-show-detailsview', component: MyShowDetailsviewComponent},
  {path: '/create-account', name: 'CreateAccount', component: MyCreateAccountComponent},
  {path: '/login', name: 'Login', component: MyLoginComponent},
  {path: '/my-events', name: 'UserEvents', component: MyUserEventsComponent},
  {path: '/my-profile-settings', name: 'Settings', component: MyProfileSettingsComponent},
  {path: '/*path', component: MyMainComponent}
])

export class EventFinderApp{
  user: FirebaseObjectObservable<any>;
  constructor(private router: Router, public myUserService: MyUsersService, 
  private _ngZone:NgZone, public af: AngularFire) {
    
      

  }
    
  ngDoCheck() { 
    this.user = this.af.database.object('/users/' + this.myUserService.ref.getAuth().uid);
  }
  
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  
  public logout() {
    this.user = undefined;
    this.myUserService.auth.logout();
  }

  ngOnInit() {
    
  }
  
  newEventClick() {
    this.router.navigate(['/My-detailview']);
    return false;
  }
}
