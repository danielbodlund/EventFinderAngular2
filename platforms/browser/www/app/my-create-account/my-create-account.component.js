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
            var usernameExists = false;
            var users = this.userService.usersOnce;
            // Look if the passwords length is smaller than 5
            if (this.password.length < 5) {
                this.createAnnotation = 'Lösenord måste vara mins fem tecken';
                return;
            }
            // Look for spaces
            for (var i = 0; i < this.password.length; i++) {
                if (this.password.charAt(i) === ' ') {
                    this.createAnnotation = 'Lösenordet får inte inehålla mellanslag.';
                    return;
                }
            }
            // When we get the user-list callback.
            users.then(function (users) {
                // Parse the user object to an array.
                var usersAsList = Object.keys(users).map(function (key) {
                    return users[key];
                });
                // Filter the list to only contain users with the same username as the username variable.
                var arr = usersAsList.filter(function (value) {
                    return value['username'] == _this.username;
                });
                // If the username does not already exist.
                if (arr.length <= 0) {
                    var createAccountResult = _this.userService.createAccount(_this.email, _this.password);
                    createAccountResult.then(function (result) {
                        var error = result["error"];
                        var userData = result["userData"];
                        if (error) {
                            switch (error.code) {
                                case "EMAIL_TAKEN":
                                    _this.createAnnotation = 'Kontot kunde inte skapas på grund av att mejladressen redan används.';
                                    break;
                                case "INVALID_EMAIL":
                                    _this.createAnnotation = 'Detta är inte en giltlig mail.';
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
                    _this.createAnnotation = "Användarnamn finns redan.";
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
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-ctFrWcLO.tmp/0/app/my-create-account/my-create-account.component.js.map
=======
<<<<<<< HEAD
//# sourceMappingURL=/Users/iths/Documents/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0gewjfj5.tmp/0/app/my-create-account/my-create-account.component.js.map
=======
//# sourceMappingURL=/Users/iths/html/gitHtml/event/EventFinder2/EventFinderAngular2/tmp/broccoli_type_script_compiler-input_base_path-0UUNcpb2.tmp/0/app/my-create-account/my-create-account.component.js.map
>>>>>>> f28564982a93b30eb82b4e6ff76581ab402783ce
>>>>>>> a5ab894e56d3488e8ba4991ea7829f88e617fc3b
