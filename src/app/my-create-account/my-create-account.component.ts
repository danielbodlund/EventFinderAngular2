import {Component, OnInit, Inject} from '@angular/core';
import {FirebaseRef, AngularFire} from 'angularfire2';
import {User} from '../IUser';
import {Router} from '@angular/router-deprecated';
import {MyUsersService} from '../my-users.service'

@Component({
  moduleId: module.id,
  selector: 'my-create-account',
  templateUrl: 'my-create-account.component.html',
  styleUrls: ['my-create-account.component.css']
})
export class MyCreateAccountComponent implements OnInit {

  email: string = '';
  password: string = '';
  username: string = '';  
  createAnnotation : string = '';
  
  constructor(private router: Router, public userService : MyUsersService) {}
  
  ngOnInit() {
  }
  
  createAccount() {
    var self : this;
    
    if (this.email !== '' && this.password !== '' && this.username !== '') {
     
      var createAccountResult = this.userService.createAccount(this.email, this.password);
      createAccountResult.then(result => {
        let error = result["error"];
        let userData = result["userData"];
        if(error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              this.createAnnotation = 'Kontot kunde inte skapas på grund av att mejladressen redan används.';
              break;
            case "INVALID_EMAIL":
              this.createAnnotation = 'Detta är inte en giltig mail.';
              break;
            default:
              this.createAnnotation = 'Kunde inte skapa användare: ' + error;
          }
        } else {
          this.createAnnotation = '';
          let user : User = { username: this.username,
                              uid: userData.uid,
                              events: [''],
                              firstName: '',
                              lastName: '',
                              email: this.email }
                            
          this.userService.addUser(userData["uid"], user);
          this.router.navigate(['/Login']);
        }
      }); 
    }else {
      this.createAnnotation = 'You need to fill all the textfields.'
    }
  }
}
