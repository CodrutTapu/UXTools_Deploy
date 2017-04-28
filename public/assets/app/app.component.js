var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./user.service"], function (require, exports, core_1, user_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(UserService) {
            this.UserService = UserService;
        }
        AppComponent.prototype.ngOnInit = function () {
            this.getUser();
        };
        AppComponent.prototype.currentUserSave = function () {
            localStorage.setItem("currentUser", this.currentUser);
        };
        AppComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { _this.currentUserFullName = data.full_name; _this.currentUser = data; }, function (error) { return alert(Error); }, function () { return _this.currentUserSave(); });
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ux-tools',
            templateUrl: './assets/app/app.component.html',
            providers: [user_service_1.UserService],
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map