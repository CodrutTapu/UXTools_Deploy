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
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProjectComponent = (function () {
        function ProjectComponent(UserService, route) {
            this.UserService = UserService;
            this.gridElements = [];
            this.author_id = route.snapshot.params['author_id'];
            this.project_type = route.snapshot.params['project_type'];
            this.project_id = route.snapshot.params['project_id'];
            this.project_name = route.snapshot.params['project_name'];
        }
        ProjectComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.httpGet();
            this.subscription = Rx_1.Observable.interval(30000).subscribe(function (x) {
                _this.saveProjectCall();
            });
        };
        ProjectComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        ProjectComponent.prototype.addGridElement = function (dim) {
            var i;
            var maxId = 0;
            for (i = 0; i < this.gridElements.length; i++) {
                if (this.gridElements[i].id > maxId) {
                    maxId = this.gridElements[i].id;
                }
            }
            this.gridElements.push(new gridElem_1.gridElem(dim, maxId + 1, [], '#4c7ba0'));
        };
        ProjectComponent.prototype.httpGet = function () {
            var _this = this;
            this.UserService.getProject(this.author_id, this.project_id)
                .subscribe(function (data) { _this.gridElements = JSON.parse(data[0].content), _this.projectExpanded = data[0].expanded, localStorage.setItem('project_expanded', _this.projectExpanded); _this.expandProject(); }, function (error) { return alert(Error); });
        };
        ProjectComponent.prototype.saveProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveProject', data = { 'author_id': this.author_id, 'project_name': this.project_name, 'project_id': this.project_id, 'project_content': JSON.stringify(this.gridElements), 'project_modified': dd + ' ' + dt, 'project_expanded': localStorage.getItem('project_expanded') };
            $.post(ajaxurl, data, function (response) { });
        };
        ProjectComponent.prototype.saveProject = function () {
            this.saveProjectCall();
            toastr["success"](" ", "Project Saved!");
        };
        ProjectComponent.prototype.expandProject = function () {
            if (this.projectExpanded == 1) {
                var mainContainer = $('#mainContainer');
                mainContainer.removeClass('container');
                mainContainer.addClass('container-fluid');
            }
        };
        return ProjectComponent;
    }());
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            templateUrl: 'assets/app/project_component/project.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
    ], ProjectComponent);
    exports.ProjectComponent = ProjectComponent;
});
//# sourceMappingURL=project.component.js.map