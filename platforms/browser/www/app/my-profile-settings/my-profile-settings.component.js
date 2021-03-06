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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var router_deprecated_1 = require('@angular/router-deprecated');
var MyProfileSettingsComponent = (function () {
    function MyProfileSettingsComponent(ref, data, params, router, af) {
        this.ref = ref;
        this.data = data;
        this.params = params;
        this.router = router;
        this.af = af;
        this.newPassword = '';
        this.loginNotation = '';
        this.gravatar = this.ref.getAuth().password.profileImageURL;
    }
    MyProfileSettingsComponent.prototype.ngOnInit = function () {
    };
    MyProfileSettingsComponent.prototype.changePassword = function () {
        var _this = this;
        // Look for spaces
        for (var i = 0; i < this.newPassword.length; i++) {
            if (this.newPassword.charAt(i) === ' ') {
                this.loginNotation = 'Lösenordet får inte inehålla mellanslag.';
                return;
            }
        }
        this.ref.changePassword({
            email: this.email,
            oldPassword: this.oldPassword,
            newPassword: this.newPassword
        }, function (error) {
            if (error) {
                switch (error.code) {
                    case "INVALID_PASSWORD":
                        _this.loginNotation = 'Felaktigt lösenord.';
                        break;
                    case "INVALID_USER":
                        _this.loginNotation = 'Det finns ingen användare med denna email.';
                        break;
                    default:
                        console.log("Error changing password:", error);
                }
            }
            else {
                _this.loginNotation = "Lösenord ändrat!";
            }
        });
    };
    MyProfileSettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-profile-settings',
            templateUrl: 'my-profile-settings.component.html',
            styleUrls: ['my-profile-settings.component.css']
        }),
        __param(0, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [Object, router_deprecated_1.RouteData, router_deprecated_1.RouteParams, router_deprecated_1.Router, angularfire2_1.AngularFire])
    ], MyProfileSettingsComponent);
    return MyProfileSettingsComponent;
}());
exports.MyProfileSettingsComponent = MyProfileSettingsComponent;
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/app/my-profile-settings/my-profile-settings.component.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/app/my-profile-settings/my-profile-settings.component.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/my-profile-settings/my-profile-settings.component.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
