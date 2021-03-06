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
var DateHandlerService = (function () {
    function DateHandlerService() {
    }
    DateHandlerService.prototype.getDate = function () {
        var start_date = new Date().toLocaleDateString();
        return start_date;
    };
    DateHandlerService.prototype.getTime = function () {
        var start_date = new Date();
        var h = start_date.getHours();
        var m = start_date.getMinutes();
        var time;
        if (m < 10) {
            time = h + ":0" + m;
        }
        else {
            time = h + ":" + m;
        }
        return time;
    };
    DateHandlerService.prototype.getTimeStamp = function () {
        return Date.now();
    };
    DateHandlerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DateHandlerService);
    return DateHandlerService;
}());
exports.DateHandlerService = DateHandlerService;
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-IB1kZtRz.tmp/0/app/date-handler.service.js.map