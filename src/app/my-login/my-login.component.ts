import {Component, OnInit, Inject} from '@angular/core';
import {AngularFire, FirebaseRef} from 'angularfire2';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated'
import {MyMainComponent} from '../my-main';
import {MyUsersService} from '../my-users.service';

@Component({
  moduleId: module.id,
  selector: 'my-login',
  templateUrl: 'my-login.component.html',
  styleUrls: ['my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  email: string;
  password: string;
  loginNotation: string = '';
  
  constructor(public myUsersService: MyUsersService, private router: Router) {}
  
  ngOnInit() {
    //ost
  }
  
  login() {
    this.myUsersService.loginUserWithPassword(this.email, this.password).then(result => {
      let error = result["error"];
      let userData = result["userData"];
      
      if(error) {
        this.loginNotation = error;
      }else {
        this.router.navigate(['/Home']);
        this.loginNotation = '';
      }      
    });;
  }
  
  resetPassword() {
   var str = prompt("Please enter your e-mail");
    
    if (str != null) {
     
      this.myUsersService.resetPassword(str).then(result => {
        let error = result;
        
        if(error) {
          switch (error['code']) {
            case "INVALID_USER":
              this.loginNotation = str + " existerar inte.";
              break;
            default:
              console.log("Error resetting password:", error);
          }
        }else {
          this.loginNotation = "Temporärt lösenord skickat till " + str;
        }      
      });
    }
  }
  
}
