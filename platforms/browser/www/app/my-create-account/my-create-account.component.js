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
var router_deprecated_1 = require('@angular/router-deprecated');
var my_users_service_1 = require('../my-users.service');
var MyCreateAccountComponent = (function () {
    function MyCreateAccountComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.email = '';
        this.password = '';
        this.username = '';
        this.createAnnotation = '';
    }
    MyCreateAccountComponent.prototype.ngOnInit = function () {
    };
    MyCreateAccountComponent.prototype.createAccount = function () {
        var _this = this;
        var self;
        if (this.email !== '' && this.password !== '' && this.username !== '') {
            var createAccountResult = this.userService.createAccount(this.email, this.password);
            createAccountResult.then(function (result) {
                var error = result["error"];
                var userData = result["userData"];
                if (error) {
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            _this.createAnnotation = 'Kontot kunde inte skapas på grund av att mejladressen redan används.';
                            break;
                        case "INVALID_EMAIL":
                            _this.createAnnotation = 'Detta är inte en giltig mail.';
                            break;
                        default:
                            _this.createAnnotation = 'Kunde inte skapa användare: ' + error;
                    }
                }
                else {
                    _this.createAnnotation = '';
                    var user = { username: _this.username,
                        uid: userData.uid,
                        events: [''],
                        firstName: '',
                        lastName: '',
                        email: _this.email };
                    _this.userService.addUser(userData["uid"], user);
                    _this.router.navigate(['/Login']);
                }
            });
        }
        else {
            this.createAnnotation = 'You need to fill all the textfields.';
        }
    };
    MyCreateAccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-create-account',
            templateUrl: 'my-create-account.component.html',
            styleUrls: ['my-create-account.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, my_users_service_1.MyUsersService])
    ], MyCreateAccountComponent);
    return MyCreateAccountComponent;
}());
exports.MyCreateAccountComponent = MyCreateAccountComponent;
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/app/my-create-account/my-create-account.component.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/my-create-account/my-create-account.component.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
