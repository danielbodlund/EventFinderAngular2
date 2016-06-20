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
var router_deprecated_2 = require('@angular/router-deprecated');
var my_events_service_1 = require('../my-events.service');
var my_users_service_1 = require('../my-users.service');
var MyShowDetailsviewComponent = (function () {
    function MyShowDetailsviewComponent(myUsersService, myEventsService, data, params, router) {
        this.myUsersService = myUsersService;
        this.myEventsService = myEventsService;
        this.data = data;
        this.params = params;
        this.router = router;
        this.event = {};
    }
    MyShowDetailsviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get uid from sender
        this.eventId = this.params.get('uid');
        this.myEventsService.getEvent(this.eventId).then(function (result) {
            _this.event = result;
        });
    };
    MyShowDetailsviewComponent.prototype.onClick = function (id) {
        this.router.navigate(['/My-detailview', { uid: id }]);
        return false;
    };
    // Check if the user is allowed to edit a specified event.
    MyShowDetailsviewComponent.prototype.isValid = function () {
        try {
            if (this.event["uid"].includes(this.myUsersService.loggedInUserId))
                return true;
        }
        catch (e) {
            return false;
        }
    };
    MyShowDetailsviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-show-detailsview',
            templateUrl: 'my-show-detailsview.component.html',
            styleUrls: ['my-show-detailsview.component.css'],
            directives: [my_comment_1.MyCommentComponent],
            inputs: ['uid'],
            providers: [my_events_service_1.MyEventsService, my_users_service_1.MyUsersService]
        }), 
        __metadata('design:paramtypes', [my_users_service_1.MyUsersService, my_events_service_1.MyEventsService, router_deprecated_1.RouteData, router_deprecated_1.RouteParams, router_deprecated_2.Router])
    ], MyShowDetailsviewComponent);
    return MyShowDetailsviewComponent;
}());
exports.MyShowDetailsviewComponent = MyShowDetailsviewComponent;
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/app/my-show-detailsview/my-show-detailsview.component.js.map