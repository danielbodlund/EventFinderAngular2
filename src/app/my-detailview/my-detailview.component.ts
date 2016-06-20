import {Component, OnInit, Inject, NgZone} from '@angular/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {MyCommentComponent} from '../my-comment';
import {RouteData, Router, RouteParams, OnActivate, ComponentInstruction, CanActivate} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { DateHandlerService } from '../date-handler.service';
import {MyEventsService} from '../my-events.service';
import {MyUsersService} from '../my-users.service';
import {CameraService} from '../camera.service';


@Component({
  moduleId: module.id,
  selector: 'my-detailview',
  templateUrl: 'my-detailview.component.html',
  styleUrls: ['my-detailview.component.css'],
  providers: [DateHandlerService, CameraService], 
  directives: [MyCommentComponent],
  inputs: ['comments']
})
//@CanActivate(() => tokenNotExpired())
export class MyDetailviewComponent implements OnInit {

  eventId = ""
  newEvent = false
  imgSrc: HTMLImageElement; 

  constructor(public myUsersService : MyUsersService, 
              public myEventsService: MyEventsService, 
              private dateHandlerService: DateHandlerService, 
              public data: RouteData, 
              public params: RouteParams, 
              private router: Router, 
              private _zone : NgZone,
              public cameraService : CameraService) {
  }
  event: FullEvent = {name: "",
                      start_date: "",
                      end_date:"",
                      start_time: "",
                      end_time: "",
                      description: "",
                      adress: "",
                      comments: [null],
                      price: "",
                      organizer: "",
                      phone: "",
                      email: "",
                      uid: null,
                      imageURL: ""}
  
  ngOnInit() {
    
    // Get uid from sender
    this.eventId = this.params.get('uid');

    if (this.eventId==="") {
      this.newEvent = true;
    }else {
      this.myEventsService.getEvent(this.eventId).then(result => {
      console.log("list");
       this.event = <FullEvent>result;
    });
    }

  }
  
  save(eid){
    var x : FullEvent = this.event
    if (!this.checkValue()) {
      alert("Fyll i alla fält!")
      return false;
    }
    if (!this.checkDate(x.start_date) || !this.checkDate(x.end_date)) {
      alert("Datum är inte korrekt ifyllt!");
      return false;
    }
    this.checkPicture();

    // If the user is creating a new event.
    if (this.newEvent) {
      
      var timeStamp = this.dateHandlerService.getTimeStamp();
      x.uid = this.myUsersService.loggedInUserId + '-' + timeStamp;
      var newRef = this.myEventsService.updateEvent(x.uid, x);
      this.router.navigate(['/UserEvents']);
      return false;

    }else {
      this.myEventsService.updateEvent(x.uid ,x);
      this.router.navigate(['/My-show-detailsview', { uid: x.uid }]);
      return false;
    }
  }
  
  checkDate(date: string){
    if (date.length !== 10) {
      return false;
    }
    if (date[4] !== '-' && date[7] !== '-') {
      return false;
    }
    return true;
  }

  checkValue() {
    console.log("inside checkValue")
    var newEvent = {name: this.event.name,
                    start_date: this.event.start_date,
                    end_date: this.event.end_date,
                    start_time: this.event.start_time,
                    end_time: this.event.end_time,
                    description: this.event.description,
                    adress: this.event.adress,
                    comments: [null],
                    price: this.event.price,
                    organizer: this.event.organizer,
                    phone: this.event.phone,
                    email: this.event.email}
    for (var i in newEvent) {
      if(newEvent[i] === "" || newEvent[i] === undefined) {
        return false
      }
    }
    return true
  }

  checkPicture() {
    if (this.event.imageURL === "" || this.event.imageURL === undefined) {
      this.event.imageURL = "http://cdn.almoststill.com/wp-content/uploads/2014/11/img-placeholder-dark.jpg";
    }
  }

  delete() {
    var x;
    if (confirm("Är du säker?") == true) {
        x = "Evenemanget raderades!";
        this.myEventsService.removeEvent(this.eventId);
        this.router.navigate(['/Home']);
    } else {
        x = "Avbröts";
    }
    return false;
  }

  cancel() {
    var x : FullEvent = this.event
    if (!x.uid) {
      this.router.navigate(['/UserEvents']);
    }else {
      this.router.navigate(['/My-show-detailsview', {uid: x.uid}]);
    }
    
    return false;
  }
  
  takePicture() {
    console.log("take photo");
    navigator.camera.getPicture((src) => {
      /*this._zone.run(() => {
        console.log("inside zone...");
        //var encodedImgae = window.btoa(src);
        //this.event.imageURL = window.atob(encodedImgae);
        //this.event.imageURL = "data:image/jpeg;base64," + src;
        //this.event.imageURL = this.encodeImageUri(src);
        //console.log(src);
        //this.cameraService.uploadData(src);
        //this.debug(src);
      });*/
      console.log("inside getPicture callback");
      this.getFileContentAsBase64(src, (base64Image) => {
      //window.open(base64Image);
      console.log(base64Image); 
      this._zone.run(() => {
        console.log("inside _zone callback");
        this.event.imageURL = base64Image;
        console.log(this.event.imageURL);
      });
      // Then you'll be able to handle the myimage.png file as base64
      console.log("end of getPicutre success callback");  
    });
    console.log("Last step inside success callback");
    console.log(this.event.imageURL);  
    }, (error) => {
      alert("error" + error);
    }, {
      quality: 1,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA
    });
  }
  
 /* 
 //Test to encode image separately
  encodeImageUri(imageUri) {
     var c=document.createElement('canvas');
     var ctx=c.getContext("2d");
     var img=new Image();
     img.onload = function(){
       c.width=this.width;
       c.height=this.height;
       ctx.drawImage(img, 0,0);
     };
     img.src=imageUri;
     var dataURL = c.toDataURL("image/jpeg");
     return dataURL;
  }
  */
  
  /*
  //Test to do exacly as Cordova docs show
  capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, { quality: 20, allowEdit: true,
        destinationType: Camera.DestinationType.DATA_URL });
  }
  
  onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //

      // Unhide image elements
      //

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      this.imgSrc = document.getElementsByTagName('img');
      imgSrc.style.display = 'block';
      
      this._zone.run(() => {
        //this.event.imageURL = "data:image/jpeg;base64," + imageData;
        imgSrc.src = "data:image/jpeg;base64," + imageData;
      });
    }
    
    onFail(message) {
      alert('Failed because: ' + message);
    }*/
    
    //Test to do encoding with FileReader solution
    
    getFileContentAsBase64(path,callback){
      console.log("inside getFileContent");
      window.resolveLocalFileSystemURL(path, gotFile, fail);
      
      function fail(e) {
          alert('Cannot found requested file');
      }
     
      function gotFile(fileEntry) {
        console.log("inside gotFile")
           fileEntry.file(function(file) {

             console.log("inside gotFile callback 1 ");
             //Kommer inte hit på Android ... alls ... 
             /*console.log(file);
              var reader = new FileReader();
              reader.onloadend = function(e) {
                console.log("inside onloadedend callback");
                console.log(e);
                   var content = this.result;
                   callback(content);
              };
              // The most important point, use the readAsDatURL Method from the file plugin
              reader.readAsDataURL(file);*/
           });
      console.log("gotFile end");     
      }
      console.log("getFileContent end");
    }
  
  debug(stuff) {
    console.log(stuff);
    this.cameraService.uploadData(stuff);
  }
}

