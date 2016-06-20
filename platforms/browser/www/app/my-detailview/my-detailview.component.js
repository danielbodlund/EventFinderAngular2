"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var my_comment_1 = require('../my-comment');
var router_deprecated_1 = require('@angular/router-deprecated');
var date_handler_service_1 = require('../date-handler.service');
var my_events_service_1 = require('../my-events.service');
var my_users_service_1 = require('../my-users.service');
<<<<<<< HEAD
var camera_service_1 = require('../camera.service');
var MyDetailviewComponent = (function () {
    function MyDetailviewComponent(myUsersService, myEventsService, dateHandlerService, data, params, router, _zone, cameraService) {
=======
var MyDetailviewComponent = (function () {
    function MyDetailviewComponent(myUsersService, myEventsService, dateHandlerService, data, params, router) {
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
        this.myUsersService = myUsersService;
        this.myEventsService = myEventsService;
        this.dateHandlerService = dateHandlerService;
        this.data = data;
        this.params = params;
        this.router = router;
<<<<<<< HEAD
        this._zone = _zone;
        this.cameraService = cameraService;
=======
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
        this.eventId = "";
        this.newEvent = false;
        this.event = { name: "",
            start_date: "",
            end_date: "",
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
            imageURL: "" };
    }
    MyDetailviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get uid from sender
        this.eventId = this.params.get('uid');
        if (this.eventId === "") {
            this.newEvent = true;
        }
        else {
            this.myEventsService.getEvent(this.eventId).then(function (result) {
                console.log("list");
                _this.event = result;
            });
        }
    };
    MyDetailviewComponent.prototype.save = function (eid) {
        var x = this.event;
        if (!this.checkValue()) {
            alert("Fyll i alla fält!");
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
        }
        else {
            this.myEventsService.updateEvent(x.uid, x);
            this.router.navigate(['/My-show-detailsview', { uid: x.uid }]);
            return false;
        }
    };
    MyDetailviewComponent.prototype.checkDate = function (date) {
        if (date.length !== 10) {
            return false;
        }
        if (date[4] !== '-' && date[7] !== '-') {
            return false;
        }
        return true;
    };
    MyDetailviewComponent.prototype.checkValue = function () {
        console.log("inside checkValue");
        var newEvent = { name: this.event.name,
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
            email: this.event.email };
        for (var i in newEvent) {
            if (newEvent[i] === "" || newEvent[i] === undefined) {
                return false;
            }
        }
        return true;
    };
    MyDetailviewComponent.prototype.checkPicture = function () {
        if (this.event.imageURL === "" || this.event.imageURL === undefined) {
            this.event.imageURL = "http://cdn.almoststill.com/wp-content/uploads/2014/11/img-placeholder-dark.jpg";
        }
    };
    MyDetailviewComponent.prototype.delete = function () {
        var x;
        if (confirm("Är du säker?") == true) {
            x = "Evenemanget raderades!";
            this.myEventsService.removeEvent(this.eventId);
            this.router.navigate(['/Home']);
        }
        else {
            x = "Avbröts";
        }
        return false;
    };
    MyDetailviewComponent.prototype.cancel = function () {
        var x = this.event;
        if (!x.uid) {
            this.router.navigate(['/UserEvents']);
        }
        else {
            this.router.navigate(['/My-show-detailsview', { uid: x.uid }]);
        }
        return false;
    };
<<<<<<< HEAD
    MyDetailviewComponent.prototype.takePicture = function () {
        var _this = this;
        console.log("take photo");
        navigator.camera.getPicture(function (src) {
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
            _this.getFileContentAsBase64(src, function (base64Image) {
                //window.open(base64Image);
                console.log(base64Image);
                _this._zone.run(function () {
                    console.log("inside _zone callback");
                    _this.event.imageURL = base64Image;
                    console.log(_this.event.imageURL);
                });
                // Then you'll be able to handle the myimage.png file as base64
                console.log("end of getPicutre success callback");
            });
            console.log("Last step inside success callback");
            console.log(_this.event.imageURL);
        }, function (error) {
            alert("error" + error);
        }, {
            quality: 1,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA
        });
    };
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
    MyDetailviewComponent.prototype.getFileContentAsBase64 = function (path, callback) {
        console.log("inside getFileContent");
        window.resolveLocalFileSystemURL(path, gotFile, fail);
        function fail(e) {
            alert('Cannot found requested file');
        }
        function gotFile(fileEntry) {
            console.log("inside gotFile");
            fileEntry.file(function (file) {
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
    };
    MyDetailviewComponent.prototype.debug = function (stuff) {
        console.log(stuff);
        this.cameraService.uploadData(stuff);
    };
=======
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
    MyDetailviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-detailview',
            templateUrl: 'my-detailview.component.html',
            styleUrls: ['my-detailview.component.css'],
            providers: [date_handler_service_1.DateHandlerService, camera_service_1.CameraService],
            directives: [my_comment_1.MyCommentComponent],
            inputs: ['comments']
        }), 
<<<<<<< HEAD
        __metadata('design:paramtypes', [my_users_service_1.MyUsersService, my_events_service_1.MyEventsService, date_handler_service_1.DateHandlerService, router_deprecated_1.RouteData, router_deprecated_1.RouteParams, router_deprecated_1.Router, core_1.NgZone, camera_service_1.CameraService])
=======
        __metadata('design:paramtypes', [my_users_service_1.MyUsersService, my_events_service_1.MyEventsService, date_handler_service_1.DateHandlerService, router_deprecated_1.RouteData, router_deprecated_1.RouteParams, router_deprecated_1.Router])
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
    ], MyDetailviewComponent);
    return MyDetailviewComponent;
}());
exports.MyDetailviewComponent = MyDetailviewComponent;
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/app/my-detailview/my-detailview.component.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/app/my-detailview/my-detailview.component.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/my-detailview/my-detailview.component.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
