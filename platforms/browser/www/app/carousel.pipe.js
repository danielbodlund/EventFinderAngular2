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
<<<<<<< HEAD
            // Remove the '-' from the date so that we can filter the list later.
            var newItems = items.map(function (a) {
                a['start_date'] = a['start_date'].replace(/-/gi, '');
                return a;
            });
            // Filter out invalid dates.
            newItems = newItems.filter(function (a) {
                var date = Number(a['start_date']);
                var currentDate = Number(new Date().toLocaleDateString().replace(/-/gi, ''));
                if (date < currentDate) {
                    return false;
                }
                return !isNaN(date);
            });
            // Sort the list by date.
            newItems.sort(function (a, b) {
                var num1 = Number(a['start_date']);
                var num2 = Number(b['start_date']);
                if (num1 < num2) {
                    return -1;
                }
                if (num1 > num2) {
                    return 1;
=======
            var itemIndex = -1;
            // Filtered array of names
            items = items.reverse();
            var arr = items.filter(function (item) {
<<<<<<< HEAD
                console.log(item.start_date === dateHandler.getDate());
                if (item.start_date === dateHandler.getDate()) {
                    console.log(item);
                    return item;
=======
                if (itemIndex < 4) {
                    console.log(itemIndex);
                    itemIndex += 1;
                    return items[itemIndex];
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
                }
                return 0;
            });
            // Add '-' to the date.
            newItems = newItems.map(function (a) {
                var dateAsString = a['start_date'];
                if (dateAsString.length == 8) {
                    var year = dateAsString[0] + dateAsString[1] + dateAsString[2] + dateAsString[3] + '-';
                    var month = dateAsString[4] + dateAsString[5] + '-';
                    var day = dateAsString[6] + dateAsString[7];
                    a['start_date'] = year + month + day;
                    return a;
                }
                return a;
            });
            // Make the list the size of 5
            newItems = newItems.filter(function (a, index) {
                if (index < 5)
                    return true;
                return false;
            });
            return newItems;
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
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/app/carousel.pipe.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/app/carousel.pipe.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/carousel.pipe.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
