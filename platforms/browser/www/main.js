"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var environment_1 = require('./app/environment');
var event_finder_component_1 = require('./app/event-finder.component');
require('rxjs/Rx');
var router_deprecated_1 = require('@angular/router-deprecated');
var my_users_service_1 = require('./app/my-users.service');
var my_events_service_1 = require('./app/my-events.service');
var angularfire2_1 = require('angularfire2/angularfire2');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
document.addEventListener('deviceready', function () {
    platform_browser_dynamic_1.bootstrap(event_finder_component_1.EventFinderApp, [
        angularfire2_1.FIREBASE_PROVIDERS,
        router_deprecated_1.ROUTER_PROVIDERS,
        angularfire2_1.defaultFirebase('https://sizzling-heat-4438.firebaseio.com'),
        //storageBucket('gs://sizzling-heat-4438.appspot.com'),
        angularfire2_1.firebaseAuthConfig({
            method: angularfire2_1.AuthMethods.Redirect,
            provider: angularfire2_1.AuthProviders.Password
        }),
        my_users_service_1.MyUsersService,
        my_events_service_1.MyEventsService
    ]);
}, false);
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/main.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/main.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/main.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
