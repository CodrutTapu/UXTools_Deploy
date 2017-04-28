var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../user.service", "rxjs/Rx", "rxjs/add/operator/map"], function (require, exports, core_1, user_service_1, Rx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var newMindMapComponent = (function () {
        function newMindMapComponent(UserService) {
            this.UserService = UserService;
            this.project_name = "Default Mind Map";
            this.first_save_flag = true;
        }
        newMindMapComponent.prototype.ngAfterViewInit = function () {
            $.getScript("/assets/vendor/jsmind.custom.js", function () { });
        };
        newMindMapComponent.prototype.ngOnInit = function () {
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
        newMindMapComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        newMindMapComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.user = data; }, function (error) { return alert(Error); }, function () { return console.log('Finish!'); });
        };
        newMindMapComponent.prototype.saveNewProjectCall = function () {
            var mind_data = _jm.get_data();
            var mind_name = mind_data.meta.name;
            var mind_str = jsMind.util.json.json2string(mind_data);
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveNewProject', data = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_content': mind_str, 'project_created': dd + ' ' + dt, 'project_type': 'mind_map' };
            $.post(ajaxurl, data, function (response) {
                localStorage.setItem('insertId', response);
            });
        };
        newMindMapComponent.prototype.saveProjectCall = function () {
            var mind_data = _jm.get_data();
            var mind_name = mind_data.meta.name;
            var mind_str = jsMind.util.json.json2string(mind_data);
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveProject', data2 = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': mind_str, 'project_modified': dd + ' ' + dt };
            $.post(ajaxurl, data2, function (response) { });
        };
        newMindMapComponent.prototype.saveProject = function () {
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
        return newMindMapComponent;
    }());
    newMindMapComponent = __decorate([
        core_1.Component({
            selector: 'new-mind-map',
            templateUrl: 'assets/app/newMindMap_component/newMindMap.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], newMindMapComponent);
    exports.newMindMapComponent = newMindMapComponent;
});
//# sourceMappingURL=newMindMap.component.js.map