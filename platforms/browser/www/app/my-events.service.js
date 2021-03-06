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
var MyEventsService = (function () {
    function MyEventsService(af, ref) {
        this.af = af;
        this.ref = ref;
    }
    MyEventsService.prototype.getEvent = function (eventId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.ref.child('/events/' + eventId).on("value", function (a) {
                resolve(a.exportVal());
            });
        });
    };
    MyEventsService.prototype.getEvents = function () {
        return this.af.database.list('/events');
    };
    MyEventsService.prototype.updateEvent = function (eventId, data) {
        return this.ref.child('/events/' + eventId).update(data);
    };
    MyEventsService.prototype.removeEvent = function (eventId) {
        this.ref.child('/events/' + eventId).remove();
    };
    MyEventsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, Object])
    ], MyEventsService);
    return MyEventsService;
}());
exports.MyEventsService = MyEventsService;
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/app/my-events.service.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/app/my-events.service.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/my-events.service.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
