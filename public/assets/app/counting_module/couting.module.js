"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bgColor_module_1 = require('./bgColor.module');
var CountingModule = (function () {
    function CountingModule() {
    }
    CountingModule.prototype.deleteCountingModule = function (gE) {
        gE.moduleType = {};
    };
    CountingModule = __decorate([
        core_1.Component({
            selector: 'counting-module',
            templateUrl: 'app/counting.module.html',
            styleUrls: ['app/counting.module.css'],
            directives: [bgColor_module_1.bgColorModule],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], CountingModule);
    return CountingModule;
}());
exports.CountingModule = CountingModule;
//# sourceMappingURL=couting.module.js.map