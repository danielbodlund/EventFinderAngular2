/**************************************************************************
*********************
* User Configuration.
***************************************************************************
*******************/
/** Map relative paths to URLs. */
var map = {
    'angularfire2': 'vendor/angularfire2',
    'firebase': 'vendor/firebase/lib/firebase-web.js',
    'moment': 'vendor/moment/moment.js'
};
/** User packages configuration. */
var packages = {
    angularfire2: {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/**************************************************************************
*********************
* Everything underneath this line is managed by the CLI.
***************************************************************************
*******************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/my-demosearch',
    'app/my-main',
    'app/my-navbar',
    'app/my-comment',
    'app/my-detailview',
    'app/my-tile',
    'app/my-event-container',
    'app/my-show-detailsview',
    'app/my-carousel',
    'app/my-searchbar',
    'app/my-login',
    'app/my-create-account',
    'app/my-user-events',
    'app/my-profile-settings',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = {
        main: 'index'
    };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({
    map: map,
    packages: packages
});
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/system-config.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/system-config.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/system-config.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
