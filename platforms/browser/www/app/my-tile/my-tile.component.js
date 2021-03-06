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
var my_events_service_1 = require('../my-events.service');
var MyTileComponent = (function () {
    function MyTileComponent(das, _ngZone) {
        this.das = das;
        this._ngZone = _ngZone;
        this.event = {};
    }
    MyTileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.das.getEvent(this.eventId).then(function (result) {
            _this._ngZone.run(function () {
                _this.event = result;
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyTileComponent.prototype, "eventId", void 0);
    MyTileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-tile',
            templateUrl: 'my-tile.component.html',
            styleUrls: ['my-tile.component.css'],
            providers: [my_events_service_1.MyEventsService]
        }), 
        __metadata('design:paramtypes', [my_events_service_1.MyEventsService, core_1.NgZone])
    ], MyTileComponent);
    return MyTileComponent;
}());
exports.MyTileComponent = MyTileComponent;
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/app/my-tile/my-tile.component.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/app/my-tile/my-tile.component.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/my-tile/my-tile.component.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
