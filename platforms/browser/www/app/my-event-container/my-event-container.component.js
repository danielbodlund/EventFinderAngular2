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
var search_pipe_1 = require('../search.pipe');
var my_events_service_1 = require('../my-events.service');
var MyEventContainerComponent = (function () {
    function MyEventContainerComponent(router, myEventService) {
        this.router = router;
        this.myEventService = myEventService;
        this.events = {};
    }
    MyEventContainerComponent.prototype.onClick = function (id) {
        this.router.navigate(['/My-show-detailsview', { uid: id }]);
    };
    MyEventContainerComponent.prototype.ngOnInit = function () {
        this.events = this.myEventService.getEvents();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyEventContainerComponent.prototype, "searchText", void 0);
    MyEventContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-event-container',
            templateUrl: 'my-event-container.component.html',
            styleUrls: ['my-event-container.component.css'],
            directives: [my_tile_1.MyTileComponent],
            inputs: ['eventId', 'searchText'],
            pipes: [search_pipe_1.Search]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, my_events_service_1.MyEventsService])
    ], MyEventContainerComponent);
    return MyEventContainerComponent;
}());
exports.MyEventContainerComponent = MyEventContainerComponent;
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/app/my-event-container/my-event-container.component.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/app/my-event-container/my-event-container.component.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/my-event-container/my-event-container.component.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
