var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewMindMapModule = (function () {
        function ViewMindMapModule() {
        }
        ViewMindMapModule.prototype.ngOnInit = function () {
            localStorage.setItem('mind_map_content', this.module.content);
        };
        ViewMindMapModule.prototype.ngAfterViewInit = function () {
            $.getScript("/assets/vendor/jsmind.render.js", function () { });
        };
        return ViewMindMapModule;
    }());
    ViewMindMapModule = __decorate([
        core_1.Component({
            selector: 'view-mind-map-module',
            templateUrl: 'assets/app/mindMap_module/view.mindMap.module.html',
            styleUrls: ['assets/app/mindMap_module/mindMap.module.css'],
            inputs: ['gE', 'module']
        })
    ], ViewMindMapModule);
    exports.ViewMindMapModule = ViewMindMapModule;
});
//# sourceMappingURL=view.mindMap.module.js.map