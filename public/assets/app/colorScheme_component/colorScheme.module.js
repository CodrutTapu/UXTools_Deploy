var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    var colorSchemeModule = (function () {
        function colorSchemeModule() {
            this.customCsColor = '#FFFFFF';
            this.schemeColors = ['#4c7ba0', '#ffffff', '#ee4039', '#f07171', '#124666', '#737373', '#f8b13d', '#00b5c8', '#81bda4', '#b05574'];
            this.customSchemeColor = "#FFFFFF";
        }
        colorSchemeModule.prototype.schemeColorsListToggle = function () {
            $('.scheme-colors-list').toggle();
        };
        colorSchemeModule.prototype.updateCsColor = function () {
            if (this.customCsColor[0] != '#') {
                this.customCsColor = "#" + this.customCsColor;
            }
            ;
            var i;
            for (i = 0; i < this.gridElements.length; i++) {
                this.gridElements[i].csColor = this.customCsColor;
            }
            $("<style type='text/css'>.scale-chart-module input[type=range]::-webkit-slider-thumb{background:" + this.customCsColor + "!important}</style>").appendTo($("head"));
        };
        colorSchemeModule.prototype.selectColorSchemeColor = function (sC) {
            var i;
            for (i = 0; i < this.gridElements.length; i++) {
                this.gridElements[i].csColor = sC;
            }
            $("<style type='text/css'>.scale-chart-module input[type=range]::-webkit-slider-thumb{background:" + sC + "!important}</style>").appendTo($("head"));
        };
        return colorSchemeModule;
    }());
    colorSchemeModule = __decorate([
        core_1.Component({
            selector: 'colorScheme-module',
            templateUrl: 'assets/app/colorScheme_component/colorScheme.module.html',
            styleUrls: ['assets/app/colorScheme_component/colorScheme.module.css'],
            inputs: ['gridElements']
        })
    ], colorSchemeModule);
    exports.colorSchemeModule = colorSchemeModule;
});
//# sourceMappingURL=colorScheme.module.js.map