var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewCountingModule = (function () {
        function ViewCountingModule() {
        }
        return ViewCountingModule;
    }());
    ViewCountingModule = __decorate([
        core_1.Component({
            selector: 'view-counting-module',
            templateUrl: 'assets/app/counting_module/view.counting.module.html',
            styleUrls: ['assets/app/counting_module/counting.module.css'],
            inputs: ['gE', 'module']
        })
    ], ViewCountingModule);
    exports.ViewCountingModule = ViewCountingModule;
});
//# sourceMappingURL=view.counting.module.js.map