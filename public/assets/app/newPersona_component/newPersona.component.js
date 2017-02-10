var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../models/gridElem", "../text_module/textModule", "../user.service"], function (require, exports, core_1, gridElem_1, textModule_1, user_service_1) {
    "use strict";
    var newPersonaComponent = (function () {
        function newPersonaComponent(UserService) {
            this.UserService = UserService;
            this.project_name = "Default";
            this.getData = [];
            this.gridElements = [new gridElem_1.gridElem(4, 1, [new textModule_1.textModule(1, 'text-module', '<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>', '#F8F8F8')], '#4c7ba0'),
                new gridElem_1.gridElem(4, 2, [new textModule_1.textModule(1, 'text-module', '<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>', '#F8F8F8')], '#4c7ba0'),
                new gridElem_1.gridElem(4, 3, [new textModule_1.textModule(1, 'text-module', '<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>', '#F8F8F8')], '#4c7ba0')];
            this.id = 3;
        }
        newPersonaComponent.prototype.ngOnInit = function () {
            this.getUser();
        };
        newPersonaComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.user = data; }, function (error) { return alert(Error); }, function () { return console.log('Finish!'); });
        };
        newPersonaComponent.prototype.addGridElement = function (dim) {
            this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1, [], '#4c7ba0'));
            this.id = this.id + 1;
        };
        newPersonaComponent.prototype.savePersona = function () {
            var ajaxurl = '/projects/saveNewPersona', data = { 'author_id': this.user.id, 'project_name': this.project_name, 'persona_content': JSON.stringify(this.gridElements) };
            $.post(ajaxurl, data, function (response) { });
            toastr["success"](" ", "Persona Saved!");
        };
        return newPersonaComponent;
    }());
    newPersonaComponent = __decorate([
        core_1.Component({
            selector: 'new-persona',
            templateUrl: 'assets/app/newPersona_component/persona.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], newPersonaComponent);
    exports.newPersonaComponent = newPersonaComponent;
});
//# sourceMappingURL=newPersona.component.js.map