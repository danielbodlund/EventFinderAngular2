"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var my_comment_component_1 = require('./my-comment.component');
testing_1.describe('MyComment Component', function () {
    testing_1.beforeEachProviders(function () { return []; });
    testing_1.it('should ...', testing_1.injectAsync([testing_2.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(my_comment_component_1.MyCommentComponent).then(function (fixture) {
            fixture.detectChanges();
        });
    }));
});
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-d0RXkuCR.tmp/0/app/my-comment/my-comment.component.spec.js.map