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
var Carousel = (function () {
    function Carousel() {
    }
    Carousel.prototype.transform = function (value, term) {
        return value.map(function (items) {
            var itemIndex = -1;
            // Filtered array of names
            items = items.reverse();
            var arr = items.filter(function (item) {
                if (itemIndex < 4) {
                    console.log(itemIndex);
                    itemIndex += 1;
                    return items[itemIndex];
                }
            });
            return arr;
            // Adds the two arrays togheter and removes duplicates
        });
    };
    Carousel = __decorate([
        core_1.Pipe({
            name: 'carousel'
        }), 
        __metadata('design:paramtypes', [])
    ], Carousel);
    return Carousel;
}());
exports.Carousel = Carousel;
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/carousel.pipe.js.map