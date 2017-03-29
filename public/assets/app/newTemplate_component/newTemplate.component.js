var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../models/gridElem", "@angular/router", "../user.service", "rxjs/Rx", "rxjs/add/operator/map"], function (require, exports, core_1, gridElem_1, router_1, user_service_1, Rx_1) {
    "use strict";
    var newTemplateComponent = (function () {
        function newTemplateComponent(UserService, route) {
            this.UserService = UserService;
            this.getData = [];
            this.gridElements = [];
            this.first_save_flag = true;
            this.id = 3;
            this.project_id = route.snapshot.params['project_id'];
            this.project_name = route.snapshot.params['project_name'];
        }
        newTemplateComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.getUser();
            this.subscription = Rx_1.Observable.interval(30000).subscribe(function (x) {
                if (_this.first_save_flag) {
                    _this.saveNewProjectCall();
                    _this.first_save_flag = false;
                }
                else {
                    _this.saveProjectCall();
                }
            });
        };
        newTemplateComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        newTemplateComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.user = data; }, function (error) { return alert(Error); }, function () { return _this.httpGet(); });
        };
        newTemplateComponent.prototype.httpGet = function () {
            var _this = this;
            this.UserService.getProject(this.user.id, this.project_id)
                .subscribe(function (data) { return _this.getData = data; }, function (error) { return alert(Error); }, function () { return _this.gridElements = JSON.parse(_this.getData[0].content); });
        };
        newTemplateComponent.prototype.addGridElement = function (dim) {
            this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1, [], '#4c7ba0'));
            this.id = this.id + 1;
        };
        newTemplateComponent.prototype.saveNewProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveNewProject', data = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_content': JSON.stringify(this.gridElements), 'project_created': dd + ' ' + dt, 'project_type': 'custom_project' };
            $.post(ajaxurl, data, function (response) {
                localStorage.setItem('insertId', response);
            });
        };
        newTemplateComponent.prototype.saveProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveProject', data2 = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': JSON.stringify(this.gridElements), 'project_modified': dd + ' ' + dt };
            $.post(ajaxurl, data2, function (response) { });
        };
        newTemplateComponent.prototype.saveProject = function () {
            if (this.first_save_flag) {
                this.saveNewProjectCall();
                toastr["success"](" ", "Project Created!");
                this.first_save_flag = false;
            }
            else {
                this.saveProjectCall();
                toastr["success"](" ", "Project Saved!");
            }
        };
        return newTemplateComponent;
    }());
    newTemplateComponent = __decorate([
        core_1.Component({
            selector: 'new-persona',
            templateUrl: 'assets/app/newTemplate_component/newTemplate.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
    ], newTemplateComponent);
    exports.newTemplateComponent = newTemplateComponent;
});
//# sourceMappingURL=newTemplate.component.js.map