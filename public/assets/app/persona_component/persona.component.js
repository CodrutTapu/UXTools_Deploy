var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../models/gridElem", "@angular/router", "../user.service"], function (require, exports, core_1, gridElem_1, router_1, user_service_1) {
    "use strict";
    var PersonaComponent = (function () {
        function PersonaComponent(UserService, route) {
            this.UserService = UserService;
            this.getData = [];
            this.gridElements = [];
            this.author_id = route.snapshot.params['author_id'];
            this.project_type = route.snapshot.params['project_type'];
            this.project_id = route.snapshot.params['project_id'];
            this.project_name = route.snapshot.params['project_name'];
        }
        PersonaComponent.prototype.ngOnInit = function () {
            this.httpGet();
        };
        PersonaComponent.prototype.addGridElement = function (dim) {
            var i;
            var maxId = 0;
            for (i = 0; i < this.gridElements.length; i++) {
                if (this.gridElements[i].id > maxId) {
                    maxId = this.gridElements[i].id;
                }
            }
            this.gridElements.push(new gridElem_1.gridElem(dim, maxId + 1, [], '#4c7ba0'));
        };
        PersonaComponent.prototype.httpGet = function () {
            var _this = this;
            this.UserService.getProject(this.author_id, this.project_id)
                .subscribe(function (data) { return _this.getData = data; }, function (error) { return alert(Error); }, function () { return _this.gridElements = JSON.parse(_this.getData[0].content); });
        };
        PersonaComponent.prototype.savePersona = function () {
            var ajaxurl = '/projects/savePersona', data = { 'author_id': this.author_id, 'project_name': this.project_name, 'project_id': this.project_id, 'persona_content': JSON.stringify(this.gridElements) };
            $.post(ajaxurl, data, function (response) { });
            toastr["success"](" ", "Persona Saved!");
        };
        return PersonaComponent;
    }());
    PersonaComponent = __decorate([
        core_1.Component({
            selector: 'persona',
            templateUrl: 'assets/app/persona_component/persona.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
    ], PersonaComponent);
    exports.PersonaComponent = PersonaComponent;
});
//# sourceMappingURL=persona.component.js.map