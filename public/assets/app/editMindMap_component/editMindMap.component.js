var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router", "../user.service", "rxjs/Rx", "rxjs/add/operator/map"], function (require, exports, core_1, router_1, user_service_1, Rx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var editMindMapComponent = (function () {
        function editMindMapComponent(UserService, route) {
            this.UserService = UserService;
            this.getData = [];
            this.author_id = route.snapshot.params['author_id'];
            this.project_type = route.snapshot.params['project_type'];
            this.project_id = route.snapshot.params['project_id'];
            this.project_name = route.snapshot.params['project_name'];
        }
        editMindMapComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.getUser();
            this.httpGet();
            this.subscription = Rx_1.Observable.interval(30000).subscribe(function (x) {
                _this.saveProjectCall();
            });
        };
        editMindMapComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.user = data; }, function (error) { return alert(Error); }, function () { return console.log('Finish!'); });
        };
        editMindMapComponent.prototype.ngAfterViewInit = function () {
            $.getScript("/assets/vendor/jsmind.functions.js", function () { });
        };
        editMindMapComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        editMindMapComponent.prototype.saveProjectCall = function () {
            var mind_data = _jm.get_data();
            var mind_name = mind_data.meta.name;
            var mind_str = jsMind.util.json.json2string(mind_data);
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveProject', data2 = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': mind_str, 'project_modified': dd + ' ' + dt };
            $.post(ajaxurl, data2, function (response) { });
        };
        editMindMapComponent.prototype.saveProject = function () {
            this.saveProjectCall();
            toastr["success"](" ", "Project Saved!");
        };
        editMindMapComponent.prototype.httpGet = function () {
            var _this = this;
            this.UserService.getProject(this.author_id, this.project_id)
                .subscribe(function (data) { return _this.getData = data; }, function (error) { return alert(Error); }, function () { return localStorage.setItem('MindMapData', _this.getData[0].content); });
        };
        return editMindMapComponent;
    }());
    editMindMapComponent = __decorate([
        core_1.Component({
            selector: 'edit-mind-map',
            templateUrl: 'assets/app/editMindMap_component/editMindMap.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
    ], editMindMapComponent);
    exports.editMindMapComponent = editMindMapComponent;
});
//# sourceMappingURL=editMindMap.component.js.map