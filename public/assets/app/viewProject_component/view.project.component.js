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
    var ViewProjectComponent = (function () {
        function ViewProjectComponent(UserService, route) {
            this.UserService = UserService;
            this.getProject = [];
            this.gridElements = [];
            this.author_id = route.snapshot.params['author_id'];
            this.project_type = route.snapshot.params['project_type'];
            this.project_id = route.snapshot.params['project_id'];
            this.project_name = route.snapshot.params['project_name'];
        }
        ViewProjectComponent.prototype.ngOnInit = function () {
            this.httpGet();
            this.getUser();
        };
        ViewProjectComponent.prototype.httpGet = function () {
            var _this = this;
            this.UserService.getProject(this.author_id, this.project_id)
                .subscribe(function (data) { _this.getProject = data, _this.projectExpanded = data[0].expanded; }, function (error) { return alert(Error); }, function () { return _this.gridElements = JSON.parse(_this.getProject[0].content); });
        };
        ViewProjectComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.currentUser = data; }, function (error) { return alert(Error); });
        };
        return ViewProjectComponent;
    }());
    ViewProjectComponent = __decorate([
        core_1.Component({
            selector: 'view-project',
            templateUrl: 'assets/app/viewProject_component/view.project.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
    ], ViewProjectComponent);
    exports.ViewProjectComponent = ViewProjectComponent;
});
//# sourceMappingURL=view.project.component.js.map