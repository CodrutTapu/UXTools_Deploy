var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../user.service"], function (require, exports, core_1, user_service_1) {
    "use strict";
    var DashboardComponent = (function () {
        function DashboardComponent(UserService) {
            this.UserService = UserService;
            this.projects = [];
            this.viewArchivedProjects = false;
            this.viewTemplates = false;
        }
        DashboardComponent.prototype.ngOnInit = function () {
            this.getUser();
        };
        DashboardComponent.prototype.UserServiceGetProjects = function () {
            var _this = this;
            this.UserService.getProjects(this.user.id)
                .subscribe(function (data) { return _this.projects = data; }, function (error) { return alert(Error); }, function () { return console.log("Finish!"); });
        };
        DashboardComponent.prototype.changeViewArchivedProjects = function () {
            this.viewArchivedProjects = !this.viewArchivedProjects;
            if (this.viewArchivedProjects === true) {
                $('.view-archived-btn').html('<i class="fa fa-file-archive-o" aria-hidden="true"></i> Unarchived Projects');
            }
            else {
                $('.view-archived-btn').html('<i class="fa fa-file-archive-o" aria-hidden="true"></i> Archived Projects');
            }
        };
        DashboardComponent.prototype.changeViewTemplates = function () {
            this.viewTemplates = !this.viewTemplates;
        };
        DashboardComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.user = data; }, function (error) { return alert(Error); }, function () { return _this.UserServiceGetProjects(); });
        };
        DashboardComponent.prototype.deleteProject = function (author_id, project_id) {
            var ajaxurl = '/projects/deleteProject', data = { 'author_id': author_id, 'project_id': project_id };
            $.post(ajaxurl, data, function (response) {
                toastr["error"](" ", "Project Deleted!");
            });
            this.UserServiceGetProjects();
        };
        DashboardComponent.prototype.archiveProject = function (author_id, project_id, project_archived) {
            var ajaxurl = '/projects/archiveProject', data = { 'author_id': author_id, 'project_id': project_id };
            $.post(ajaxurl, data, function (response) {
                if (project_archived == 1) {
                    toastr["warning"](" ", "Project Unarchived!");
                }
                else {
                    toastr["warning"](" ", "Project Archived!");
                }
            });
            this.UserServiceGetProjects();
        };
        DashboardComponent.prototype.saveAsTemplate = function (project_id) {
            var ajaxurl = '/projects/saveAsTemplate', data = { 'project_id': project_id };
            $.post(ajaxurl, data, function (response) {
                toastr["success"](" ", "Saved as Template!");
            });
            this.UserServiceGetProjects();
        };
        return DashboardComponent;
    }());
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-component',
            templateUrl: './assets/app/dashboard/dashboard.component.html',
            styleUrls: ['./assets/app/dashboard/dashboard.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], DashboardComponent);
    exports.DashboardComponent = DashboardComponent;
});
//# sourceMappingURL=dashboard.component.js.map