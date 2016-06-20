import {Component, OnInit, Inject} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {RouteData, Router, RouteParams, OnActivate, ComponentInstruction, CanActivate} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {MyMainComponent} from '../my-main'



@Component({
  moduleId: module.id,
  selector: 'my-profile-settings',
  templateUrl: 'my-profile-settings.component.html',
  styleUrls: ['my-profile-settings.component.css']
})
export class MyProfileSettingsComponent implements OnInit {
  
  email: string;
  oldPassword: string;
  newPassword: string = '';
  loginNotation: string ='';
  gravatar: string = this.ref.getAuth().password.profileImageURL;
  
  constructor(@Inject(FirebaseRef) public ref:any, public data: RouteData, public params: RouteParams, private router: Router, public af: AngularFire) {}
  
  ngOnInit() {
  }
  
  changePassword() {
     // Look for spaces
      for (let i = 0; i < this.newPassword.length; i++) {
        if(this.newPassword.charAt(i) === ' ') {
          this.loginNotation = 'Lösenordet får inte inehålla mellanslag.';
          return;
        }
      }
      
    this.ref.changePassword({
      email: this.email,
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    }, error => {
      if (error) {
        switch (error.code) {
          case "INVALID_PASSWORD":
            this.loginNotation = 'Felaktigt lösenord.';
            break;
          case "INVALID_USER":
            this.loginNotation = 'Det finns ingen användare med denna email.';
            break;
          default:
            console.log("Error changing password:", error);
        }
      } else {
        this.loginNotation = "Lösenord ändrat!";
      }
    });
      }

}
