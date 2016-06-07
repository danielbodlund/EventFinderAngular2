import {Injectable, Inject} from '@angular/core';
import {AngularFire, FirebaseRef} from 'angularfire2/angularfire2'

@Injectable()
export class MyUsersService {

  constructor(public _af : AngularFire, @Inject(FirebaseRef) private _ref: any) {}
  
  createAccount(email: string, password: string){    
    return new Promise(resolve => {        
      this._ref.createUser({
      email: email,
      password: password
      }, 
      (error, userData) => {
        let result = {"error": error, "userData": userData}
        resolve(result);
      });
    });         
  }
  
  loginUserWithPassword(email: string, password: string){
    return new Promise(resolve => {
      this._ref.authWithPassword({
      email: email,
      password: password
      }, 
      (error, userData) => {
        let result = {"error": error, "userData": userData}
        resolve(result);
      });
    });
  }
  
  resetPassword(email: string){
    return new Promise(resolve => {
      this._ref.child('/users').resetPassword({email: email}, error => {
        resolve(error);
      });
    });
  }
  
  addUser(userId: String, data : any) {
    this._af.database.object("/users/" + userId).set(data);    
  }
  
  getUsers() {
    return new Promise(resolve => {
      let result = this._af.database.list('/users');
      resolve(result);
    });
  }
  
  getUser(uid: string) {    
    /*return new Promise(resolve => {
      let result = this._ref.child('/users/' + uid).on('value', result => {
        resolve(result.exportVal());        
      });
    });  */
    
    return this._af.database.object('/users/' + uid);
  }
  
  get loggedInUserId() {
    return this._ref.getAuth().uid;
  }
  
  get auth() {
    return this._af.auth;
  }
  
  get ref() {
    return this._ref;
    
  }
}

