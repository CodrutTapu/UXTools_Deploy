var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../models/gridElem", "../text_module/textModule", "../user.service", "rxjs/Rx", "rxjs/add/operator/map"], function (require, exports, core_1, gridElem_1, textModule_1, user_service_1, Rx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var newBlankStateComponent = (function () {
        function newBlankStateComponent(UserService) {
            this.UserService = UserService;
            this.project_name = "Blank State";
            this.getData = [];
            this.gridElements = [new gridElem_1.gridElem(4, 1, [new textModule_1.textModule(1, 'text-module', '<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>', '#F8F8F8')], '#4c7ba0'),
                new gridElem_1.gridElem(4, 2, [new textModule_1.textModule(1, 'text-module', '<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>', '#F8F8F8')], '#4c7ba0'),
                new gridElem_1.gridElem(4, 3, [new textModule_1.textModule(1, 'text-module', '<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>', '#F8F8F8')], '#4c7ba0')];
            this.first_save_flag = true;
            this.id = 3;
            this.projectExpanded = 0;
        }
        newBlankStateComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.getUser();
            localStorage.setItem('project_expanded', this.projectExpanded);
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
        newBlankStateComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        newBlankStateComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.user = data; }, function (error) { return alert(Error); }, function () { return console.log('Finish!'); });
        };
        newBlankStateComponent.prototype.addGridElement = function (dim) {
            this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1, [], '#4c7ba0'));
            this.id = this.id + 1;
        };
        newBlankStateComponent.prototype.saveNewProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveNewProject', data = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_content': JSON.stringify(this.gridElements), 'project_created': dd + ' ' + dt, 'project_type': 'custom_project', 'project_expanded': localStorage.getItem('project_expanded') };
            $.post(ajaxurl, data, function (response) {
                localStorage.setItem('insertId', response);
            });
        };
        newBlankStateComponent.prototype.saveProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveProject', data2 = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': JSON.stringify(this.gridElements), 'project_modified': dd + ' ' + dt, 'project_expanded': localStorage.getItem('project_expanded') };
            $.post(ajaxurl, data2, function (response) { });
        };
        newBlankStateComponent.prototype.saveProject = function () {
            if (this.first_save_flag) {
                this.saveNewProjectCall();
                this.first_save_flag = false;
                toastr["success"](" ", "Project Created!");
            }
            else {
                this.saveProjectCall();
                toastr["success"](" ", "Project Saved!");
            }
        };
        return newBlankStateComponent;
    }());
    newBlankStateComponent = __decorate([
        core_1.Component({
            selector: 'new-blank-state',
            templateUrl: 'assets/app/newBlankState_component/newBlankState.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], newBlankStateComponent);
    exports.newBlankStateComponent = newBlankStateComponent;
});
//# sourceMappingURL=newBlankState.component.js.map