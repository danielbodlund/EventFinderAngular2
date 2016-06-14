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
var MyDetailviewComponent = (function () {
    function MyDetailviewComponent(myUsersService, myEventsService, dateHandlerService, data, params, router) {
        this.myUsersService = myUsersService;
        this.myEventsService = myEventsService;
        this.dateHandlerService = dateHandlerService;
        this.data = data;
        this.params = params;
        this.router = router;
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
    MyDetailviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-detailview',
            templateUrl: 'my-detailview.component.html',
            styleUrls: ['my-detailview.component.css'],
            providers: [date_handler_service_1.DateHandlerService],
            directives: [my_comment_1.MyCommentComponent],
            inputs: ['comments']
        }), 
        __metadata('design:paramtypes', [my_users_service_1.MyUsersService, my_events_service_1.MyEventsService, date_handler_service_1.DateHandlerService, router_deprecated_1.RouteData, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], MyDetailviewComponent);
    return MyDetailviewComponent;
}());
exports.MyDetailviewComponent = MyDetailviewComponent;
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/my-detailview/my-detailview.component.js.map