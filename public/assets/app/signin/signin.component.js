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
    Object.defineProperty(exports, "__esModule", { value: true });
    var SigninComponent = (function () {
        function SigninComponent(router, userService) {
            this.router = router;
            this.userService = userService;
        }
        SigninComponent.prototype.ngOnInit = function () {
        };
        SigninComponent.prototype.register = function (event, email, password) {
            var _this = this;
            event.preventDefault();
            this.userService.authenticate(email, password)
                .subscribe(function (data) { return _this.currentUser = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
        };
        return SigninComponent;
    }());
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './assets/app/signin/signin.component.html',
            styleUrls: ['./assets/app/signin/signin.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], SigninComponent);
    exports.SigninComponent = SigninComponent;
});
//# sourceMappingURL=signin.component.js.map