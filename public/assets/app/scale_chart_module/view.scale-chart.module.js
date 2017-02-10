var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    var ViewScaleChartModule = (function () {
        function ViewScaleChartModule() {
        }
        ViewScaleChartModule.prototype.ngOnInit = function () {
            $("<style type='text/css'>.scale-chart-module input[type=range]::-webkit-slider-thumb{background:" + this.gE.csColor + "!important}</style>").appendTo($("head"));
        };
        return ViewScaleChartModule;
    }());
    ViewScaleChartModule = __decorate([
        core_1.Component({
            selector: 'view-scale-chart-module',
            templateUrl: 'assets/app/scale_chart_module/view-scale-chart.module.html',
            styleUrls: ['assets/app/scale_chart_module/scale-chart.module.css'],
            inputs: ['gE', 'module']
        })
    ], ViewScaleChartModule);
    exports.ViewScaleChartModule = ViewScaleChartModule;
});
//# sourceMappingURL=view.scale-chart.module.js.map