var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router", "../user.service"], function (require, exports, core_1, router_1, user_service_1) {
    "use strict";
    var SignupComponent = (function () {
        function SignupComponent(router, userService) {
            this.router = router;
            this.userService = userService;
        }
        SignupComponent.prototype.ngOnInit = function () {
        };
        SignupComponent.prototype.register = function (event, full_name, email, password) {
            var _this = this;
            event.preventDefault();
            this.userService.create(full_name, email, password)
                .subscribe(function (data) { return _this.currentUser = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
        };
        return SignupComponent;
    }());
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './assets/app/signup/signup.component.html',
            styleUrls: ['./assets/app/signup/signup.component.css'],
            providers: [user_service_1.UserService],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], SignupComponent);
    exports.SignupComponent = SignupComponent;
});
//# sourceMappingURL=signup.component.js.map