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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var CameraService = (function () {
    function CameraService(ref) {
        this.ref = ref;
    }
    /*storageConfig() {
    var config = {
      apiKey: "AIzaSyDNASfKo4WSwWpqWrJXpd-L3SyzubiAll0",
      authDomain: "sizzling-heat-4438.firebaseapp.com",
      databaseURL: "https://sizzling-heat-4438.firebaseio.com",
      storageBucket: "sizzling-heat-4438.appspot.com",
    }
    
    this.ref.initializeApp(config);
    }*/
    CameraService.prototype.uploadData = function (file) {
        console.log(this.ref);
        console.log(file);
        var storage = this.ref.storage();
        var storageRef = storage.ref();
        var imageRef = storageRef.child('images');
        var uploadTask = storageRef.child('images/' + file.name).put(file);
        uploadTask.on('state_changed', function (snapshot) {
            console.log('state_changed');
        }, function (error) {
            console.log(error);
        }, function () {
            console.log('success');
            var downloadURL = uploadTask.snapshot.downloadURL;
        });
    };
    CameraService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [Object])
    ], CameraService);
    return CameraService;
}());
exports.CameraService = CameraService;
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-goZux1LR.tmp/0/app/camera.service.js.map