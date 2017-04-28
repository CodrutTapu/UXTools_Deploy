var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bgColorModule = (function () {
        function bgColorModule() {
            this.bgColors = ['#4c7ba0', '#ffffff', '#ee4039', '#f07171', '#124666', '#737373', '#f8b13d', '#00b5c8', '#81bda4', '#F8F8F8', '#b05574'];
            this.customBgColor = "#FFFFFF";
        }
        bgColorModule.prototype.colorsListToggle = function () {
            $('.colors-list').toggle();
        };
        bgColorModule.prototype.updateBgColor = function (module) {
            if (this.customBgColor[0] != '#') {
                this.customBgColor = "#" + this.customBgColor;
            }
            ;
            module.bgColor = this.customBgColor;
        };
        bgColorModule.prototype.selectBgColor = function (module, bgC) {
            module.bgColor = bgC;
        };
        return bgColorModule;
    }());
    bgColorModule = __decorate([
        core_1.Component({
            selector: 'bgColor-module',
            templateUrl: 'assets/app/bgColor_component/bgColor.module.html',
            styleUrls: ['assets/app/bgColor_component/bgColor.module.css'],
            inputs: ['module']
        })
    ], bgColorModule);
    exports.bgColorModule = bgColorModule;
});
//# sourceMappingURL=bgColor.module.js.map