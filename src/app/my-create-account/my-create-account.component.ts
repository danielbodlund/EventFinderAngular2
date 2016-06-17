import {Component, OnInit, Inject} from '@angular/core';
import {FirebaseRef, AngularFire, FirebaseListObservable} from 'angularfire2';
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
      
      var usernameExists: boolean = false;
      let users = this.userService.usersOnce;
      
      // Look if the passwords length is smaller than 5
      if(this.password.length < 5) {
        this.createAnnotation = 'Lösenord måste vara mins fem tecken';
        return;
      }
      
      // Look for spaces
      for (let i = 0; i < this.password.length; i++) {
        if(this.password.charAt(i) === ' ') {
          this.createAnnotation = 'Lösenordet får inte inehålla mellanslag.';
          return;
        }
      }
      
      // When we get the user-list callback.
      users.then(users => {
        
        // Parse the user object to an array.
        let usersAsList = Object.keys(users).map(key => {
          return users[key];
        });
        
        // Filter the list to only contain users with the same username as the username variable.
        let arr = usersAsList.filter(value => {
          return value['username'] == this.username;
        });      
        
        // If the username does not already exist.
        if(arr.length <= 0) {
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
                this.createAnnotation = 'Detta är inte en giltlig mail.';
                break;
              default:
                this.createAnnotation = 'Kunde inte skapa användare: ' + error;
            }
          } 
          
          // If there where no errors.
          else {
            this.createAnnotation = '';
            let user : User = { username: this.username,
                                uid: userData.uid,
                                events: [''],
                                firstName: '',
                                lastName: '',
                                email: this.email }
                              
            this.userService.addUser(userData["uid"], user);
            this.router.navigate(['/Login']);
          }}); 
        } 
        
        // If the username already exist.
        else {
          this.createAnnotation = "Användarnamn finns redan.";
          
        }
      });              
    } 
    
    // If the one or more textfields where empty.
    else {
      this.createAnnotation = 'You need to fill all the textfields.'
    }
  }
}
