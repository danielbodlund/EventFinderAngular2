"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var my_main_component_1 = require('./my-main.component');
testing_1.describe('MyMain Component', function () {
    testing_1.beforeEachProviders(function () { return []; });
    testing_1.it('should ...', testing_1.injectAsync([testing_2.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(my_main_component_1.MyMainComponent).then(function (fixture) {
            fixture.detectChanges();
        });
    }));
});
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-IB1kZtRz.tmp/0/app/my-main/my-main.component.spec.js.map