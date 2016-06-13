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
var my_tile_1 = require('../my-tile');
var router_deprecated_1 = require('@angular/router-deprecated');
var my_events_service_1 = require('../my-events.service');
var my_users_service_1 = require('../my-users.service');
var MyUserEventsComponent = (function () {
    function MyUserEventsComponent(myUsersService, router, myEventsService) {
        this.myUsersService = myUsersService;
        this.router = router;
        this.myEventsService = myEventsService;
    }
    MyUserEventsComponent.prototype.onClick = function (id) {
        this.router.navigate(['/My-show-detailsview', { uid: id }]);
    };
    MyUserEventsComponent.prototype.onNewEventClick = function (id) {
        this.router.navigate(['/My-detailview', { uid: id }]);
    };
    MyUserEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events = this.myEventsService.getEvents().map(function (events) {
            return events.filter(function (event) {
                return event.uid.includes(_this.myUsersService.loggedInUserId);
            });
        });
    };
    MyUserEventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-user-events',
            templateUrl: 'my-user-events.component.html',
            styleUrls: ['my-user-events.component.css'],
            directives: [my_tile_1.MyTileComponent]
        }), 
        __metadata('design:paramtypes', [my_users_service_1.MyUsersService, router_deprecated_1.Router, my_events_service_1.MyEventsService])
    ], MyUserEventsComponent);
    return MyUserEventsComponent;
}());
exports.MyUserEventsComponent = MyUserEventsComponent;
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-1D005bXy.tmp/0/app/my-user-events/my-user-events.component.js.map