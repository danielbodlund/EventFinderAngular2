import {Injectable, Inject, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';

@Injectable()
export class CameraService {

  constructor(@Inject(FirebaseRef) public ref: any) {}
  
  /*storageConfig() {
  var config = {
    apiKey: "AIzaSyDNASfKo4WSwWpqWrJXpd-L3SyzubiAll0",
    authDomain: "sizzling-heat-4438.firebaseapp.com",
    databaseURL: "https://sizzling-heat-4438.firebaseio.com",
    storageBucket: "sizzling-heat-4438.appspot.com",
  }
  
  this.ref.initializeApp(config);
  }*/
  
  uploadData(file) {
    console.log(this.ref);
    console.log(file);
    var storage = this.ref.storage();
    var storageRef = storage.ref();
    
    var imageRef = storageRef.child('images');
    
    var uploadTask = storageRef.child('images/' + file.name).put(file);
    uploadTask.on('state_changed' , function(snapshot) {
      console.log('state_changed');
    }, function(error) {
      console.log(error);
    }, function() {
      console.log('success');
      var downloadURL = uploadTask.snapshot.downloadURL;
    });
  }
  
  /*
  onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    
    onFail(message) {
      alert('Failed because: ' + message);
    }*/
}
